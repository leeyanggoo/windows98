function tetris() {
  let isGameRunning = false; // 게임이 실행중인지 확인하는 변수
  let nextBlock = null; //다음 블록을 저장할 변수

  const tetrisView = document.querySelector(".tetris__play .view ul");
  const scoreDisplay = document.querySelector(".tetris__score span");
  const levelDisplay = document.querySelector(".tetris__level span");
  const nextView = document.querySelector(".tetris__next ul");

  const tetrisWrap = document.querySelector(".tetris__wrap");
  const tetrisFolder = document.querySelector(".icon__box .icon2");
  const tetrisClose = document.querySelector(".tetris__title button");
  const tetrisModal = document.querySelector(".tetris__modal");
  const tetrisMusic = document.querySelector("#tetris-audio");
  const tetrisComplete = document.querySelector("#tetris-complete");
  const tetrisOver = document.querySelector("#tetris-over");
  const tetrisMusicBtn = document.querySelector(".tetris__music button");
  const tetrisEnding = document.querySelector(".tetris__ending");
  const tetrisPause = document.querySelector(".tetris__pause__btn");

  const line_rows = 20; // 행
  const line_cols = 12; // 열

  /** 블록 모양 설정 */
  const blocks = {
    Tmino: [
      [
        [2, 1],
        [0, 1],
        [1, 0],
        [1, 1],
      ], //ㅗ
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 1],
      ], //ㅏ
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [1, 1],
      ], //ㅜ
      [
        [1, 2],
        [0, 1],
        [1, 0],
        [1, 1],
      ], //ㅓ
    ],
    Imino: [
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
      ], //ㅡ
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
      ], //ㅣ
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
      ], //ㅡ
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
      ], //ㅣ
    ],
    Omino: [
      [
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1],
      ], //ㅁ
      [
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1],
      ],
      [
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1],
      ],
      [
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1],
      ],
    ],
    Zmino: [
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [2, 1],
      ], //Z
      [
        [1, 0],
        [0, 1],
        [1, 1],
        [0, 2],
      ],
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [2, 1],
      ], //Z
      [
        [1, 0],
        [0, 1],
        [1, 1],
        [0, 2],
      ],
    ],
    Smino: [
      [
        [0, 1],
        [1, 1],
        [1, 0],
        [2, 0],
      ], //S
      [
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 2],
      ],
      [
        [0, 1],
        [1, 1],
        [1, 0],
        [2, 0],
      ], //S
      [
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 2],
      ],
    ],
    Jmino: [
      [
        [0, 1],
        [1, 1],
        [2, 1],
        [0, 0],
      ],
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [2, 1],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
        [0, 2],
      ], //J
    ],
    Lmino: [
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [0, 1],
      ],
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
        [2, 0],
      ],
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 2],
      ], //L
    ],
  };

  let score = 0;
  let level = 1;
  let duration = 500;
  let downInterval;
  let tempMovingItem;
  let musicInterval;

  /** 블록의 정보 변수 */
  const movingItem = {
    type: "",
    direction: 0,
    top: 0,
    left: 4,
  };

  /** 시작하기 */
  function init() {
    tempMovingItem = { ...movingItem };
    newLine(line_rows, line_cols);
    playMusic();
  }

  /** 노래 시작 */
  function playMusic() {
    tetrisMusic.currentTime = 0;
    musicInterval = setInterval(() => {
      tetrisMusic.play();
    }, tetrisMusic.duration);
    tetrisMusicBtn.setAttribute("title", "일시정지");
    tetrisMusicBtn.setAttribute("class", "tetris__music__pause");
  }
  /** 노래 일시정지 */
  function pauseMusic() {
    tetrisMusic.pause();
    clearInterval(musicInterval);
    tetrisMusicBtn.setAttribute("title", "재생");
    tetrisMusicBtn.setAttribute("class", "tetris__music__play");
  }

  tetrisMusicBtn.addEventListener("click", () => {
    const isMusicPaused = tetrisMusicBtn.classList.contains(
      "tetris__music__pause"
    );
    isMusicPaused ? pauseMusic() : playMusic();
  });

  /** 라인 만들기 */
  function newLine(rows, cols) {
    for (let i = 0; i < rows; i++) {
      const li = document.createElement("li");
      const ul = document.createElement("ul");

      for (let j = 0; j < cols; j++) {
        const subLi = document.createElement("li");
        ul.prepend(subLi);
      }

      li.prepend(ul);
      tetrisView.prepend(li);
    }
  }

  /** 블록 만들기 */
  function renderBlocks(moveType = "") {
    // const type = movingItem.type;
    // const direction = movingItem.direction
    // const top = movingItem.top
    // const left = movingItem.left
    const { type, direction, top, left } = tempMovingItem;

    if (isGameRunning) {
      const movingBlocks = document.querySelectorAll(".moving");
      movingBlocks.forEach((moving) => {
        moving.classList.remove(type, "moving");
      });

      blocks[type][direction].some((block) => {
        const x = block[0] + left;
        const y = block[1] + top;

        /** 다음에 이동할 위치 */
        const target = tetrisView.childNodes[y]
          ? tetrisView.childNodes[y].childNodes[0].childNodes[x]
          : null;
        const isAvailable = checkEmpty(target);
        if (isAvailable) {
          target.classList.add(type, "moving");
        } else {
          tempMovingItem = { ...movingItem };
          setTimeout(() => {
            renderBlocks();
            if (moveType === "top") {
              seizeBlock();
            }
          }, 1);
          return true;
        }
      });
    }
    movingItem.left = left;
    movingItem.top = top;
    movingItem.direction = direction;
  }

  /** 블록이 움직일 수 없을 때 seized 클래스 추가 */
  function seizeBlock() {
    const movingBlocks = document.querySelectorAll(".moving");
    movingBlocks.forEach((moving) => {
      moving.classList.remove("moving");
      moving.classList.add("seized");
    });
    checkMatch();
  }

  /** 라인의 완성 유무 확인 */
  function checkMatch() {
    const childNodes = tetrisView.childNodes;
    let checkMatchNum = 0;
    // for문을 거꾸로 순회하게 만들어서 배열이 변경되더라도 진행하게 만들기
    for (let i = childNodes.length - 1; i >= 0; i--) {
      let matched = true;

      childNodes[i].children[0].childNodes.forEach((li) => {
        if (!li.classList.contains("seized")) {
          matched = false;
        }
      });

      if (matched) {
        checkMatchNum++;
        increaseScore(checkMatchNum);
        childNodes[i].remove();
        tetrisComplete.play();
      }
    }
    newLine(checkMatchNum, line_cols);
    generateNewBlock();
    gameover();
  }

  /** 블록 새로 나오는 함수 */
  function generateNewBlock() {
    clearInterval(downInterval);
    downInterval = setInterval(() => {
      moveBlock("top", 1);
    }, duration);

    const blockArray = Object.entries(blocks);
    let randomIndex;

    if (nextBlock === null) {
      // 게임 시작 시에만 무작위 블록 생성
      randomIndex = Math.floor(Math.random() * blockArray.length);
      nextBlock = blockArray[randomIndex][0];
    }

    // 이전에 "다음 블록"으로 설정한 블록을 현재 블록으로 설정
    movingItem.type = nextBlock;
    movingItem.top = 0;
    movingItem.left = 4;
    movingItem.direction = 0;

    tempMovingItem = { ...movingItem };
    renderBlocks();

    // 새로운 "다음 블록" 생성
    randomIndex = Math.floor(Math.random() * blockArray.length);
    nextBlock = blockArray[randomIndex][0];

    // "다음 블록"을 화면에 표시
    renderNextBlock();
  }

  /** 비어있는 li를 확인하여 맨 밑에 닿았는지 확인 */
  function checkEmpty(target) {
    if (!target || target.classList.contains("seized")) {
      return false;
    }
    return true;
  }

  /** 키보드 설정 */
  function handleKeydown(e) {
    // 게임 실행하지 않았을 경우 keydown 이벤트 막기
    if (isGameRunning) {
      // 알아보기 쉽게 code명으로 변경
      switch (e.code) {
        case "ArrowRight":
          moveBlock("left", 1);
          break;
        case "ArrowLeft":
          moveBlock("left", -1);
          break;
        case "ArrowDown":
          moveBlock("top", 1);
          break;
        case "Space":
          dropBlock();
          break;
        case "ArrowUp":
          changeDirection();
          break;
        default:
          break;
      }
    }
  }

  // 이벤트 리스너 추가
  function addKeydownListener() {
    document.addEventListener("keydown", handleKeydown);
  }

  // 이벤트 리스너 제거
  function removeKeydownListener() {
    document.removeEventListener("keydown", handleKeydown);
  }

  /** 블록 움직이기 */
  function moveBlock(moveType, amount) {
    tempMovingItem[moveType] += amount;
    renderBlocks(moveType);
  }
  /** 블록 모양 바꾸기 */
  function changeDirection() {
    const direction = tempMovingItem.direction;
    direction === 3
      ? (tempMovingItem.direction = 0)
      : (tempMovingItem.direction += 1);
    renderBlocks();
  }
  /** 스페이스바 */
  function dropBlock() {
    clearInterval(downInterval);
    downInterval = setInterval(() => {
      moveBlock("top", 1);
    }, 10);
  }

  /** 게임 점수 설정 */
  function increaseScore(checkMatchNum) {
    // 한번에 여러 줄을 완성하면 합연산으로 보너스
    var oldScore = score;
    score += checkMatchNum * 10;
    scoreDisplay.textContent = score;

    // 점수가 100의 배수를 넘어갔는지 확인
    if (Math.floor(oldScore / 100) < Math.floor(score / 100)) {
      increaseLevel();
    }
  }
  /** 게임 레벨 설정 */
  function increaseLevel() {
    level += 1;
    levelDisplay.textContent = level;
    if (duration > 50) {
      // duration이 0보다 작아지는 것을 방지
      duration -= 50;
    }
    clearInterval(downInterval); // 현재 블록 내리는 인터벌 클리어
    downInterval = setInterval(() => {
      // 새로운 duration으로 블록 내리는 인터벌 재설정
      moveBlock("top", 1);
    }, duration);
  }

  /** 보드 리셋 */
  function resetBoard() {
    const allLi = tetrisView.querySelectorAll("li");

    allLi.forEach((li) => {
      li.remove();
    });
  }

  /** 게임 끝 gameover */
  async function gameover() {
    const topLine = [...tetrisView.childNodes[0].childNodes[0].childNodes];
    const childNodes = tetrisView.childNodes;

    if (topLine.some((topLi) => topLi.classList.contains("seized"))) {
      clearInterval(downInterval); // 기존에 실행 중인 Interval이 있다면 멈춤
      pauseMusic();
      removeKeydownListener();
      tetrisOver.play();

      // 모든 칸 순차적으로 회색으로 채우기
      // 모두 채운 뒤에 이벤트가 발생하도록 promise 사용
      let promiseArray = [];
      for (let i = childNodes.length - 1; i >= 0; i--) {
        let promise = new Promise((resolve) => {
          setTimeout(() => {
            let childElements = childNodes[i].children[0].childNodes;
            for (let j = childElements.length - 1; j >= 0; j--) {
              childElements[j].classList.add("End");
            }
            resolve();
          }, (childNodes.length - 1 - i) * 100);
        });
        promiseArray.push(promise);
      }

      // 모든 칸이 회색으로 채워진 후에 keydown 이벤트 리스너 추가
      await Promise.all(promiseArray);

      tetrisEnding.style.display = "block";
      document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          addKeydownListener();
          resetGame();
          resetBoard();
          pauseMusic();
          if (tetrisWrap.classList.contains("show") && isGameRunning) {
            generateNewBlock();
            tetrisEnding.style.display = "none";
            init();
          }
        }
      });
    }
  }

  /** 블록 미리 보여주기 */
  function renderNextBlock() {
    while (nextView.firstChild) {
      nextView.removeChild(nextView.firstChild);
    }

    for (let i = 0; i < 3; i++) {
      const li = document.createElement("li");
      const ul = document.createElement("ul");

      for (let j = 0; j < 4; j++) {
        const subLi = document.createElement("li");
        ul.prepend(subLi);
      }

      li.prepend(ul);
      nextView.prepend(li);
    }

    const blockData = blocks[nextBlock][0];

    // Display the block in the center of the 6x6 grid
    blockData.forEach((point) => {
      const [x, y] = point;

      // Calculate the position in the grid
      const posX = x; // adjust the value as needed
      const posY = y; // adjust the value as needed

      // Find the corresponding subLi and add the 'block' class to it
      const ul = nextView.children[posY];
      const subLi = ul.firstChild.children[posX];
      subLi.classList.add("block", nextBlock);
    });
  }

  /** 테트리스 일시정지 */
  tetrisPause.addEventListener("click", () => {
    if (isGameRunning) {
      isGameRunning = false;
      removeKeydownListener();
      clearInterval(downInterval);
      pauseMusic();
      tetrisPause.querySelector("img").src = "images/yoshi-stop.png";
    } else {
      isGameRunning = true;
      addKeydownListener();
      downInterval = setInterval(() => {
        // 새로운 duration으로 블록 내리는 인터벌 재설정
        moveBlock("top", 1);
      }, duration);
      playMusic();
      tetrisPause.style.animationPlayState = "running";
      tetrisPause.querySelector("img").src = "images/yoshi-run.gif";
    }
  });

  /** 데이터 초기화 */
  function resetGame() {
    score = 0; // Reset score
    level = 1; // Reset level
    duration = 500; // Reset duration
    nextBlock = null; // Reset next block
    movingItem.type = ""; // Reset moving item
    movingItem.direction = 0;
    movingItem.top = 0;
    movingItem.left = 4;
    tempMovingItem = { ...movingItem }; // Reset temp moving item
    scoreDisplay.textContent = score;
    levelDisplay.textContent = level;
  }

  // 더블 클릭으로 테트리스 실행
  tetrisFolder.addEventListener("dblclick", () => {
    addKeydownListener();
    tetrisWrap.classList.add("show");
    tetrisModal.style.display = "block";
    tetrisEnding.style.display = "none";
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      if (tetrisWrap.classList.contains("show") && !isGameRunning) {
        isGameRunning = true;
        generateNewBlock();
        tetrisModal.style.display = "none";
        init();
      }
    }
  });

  // 닫기 버튼
  tetrisClose.addEventListener("click", () => {
    removeKeydownListener();
    isGameRunning = false;
    tetrisWrap.classList.remove("show");
    clearInterval(downInterval); // Clear existing intervals
    resetBoard(); // Reset the board
    tetrisModal.style.display = "none"; // Make the start button visible again
    pauseMusic();
    resetGame(); // Reset game data
  });
}
export default tetris;
