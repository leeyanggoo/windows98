function start() {
  // 마우스 커서 바꾸기
  window.onload = function () {
    // 마우스 이동
    window.addEventListener("mousemove", (e) => {
      gsap.to(".cursor", {
        duration: 0.1,
        left: e.pageX - 5,
        top: e.pageY - 10,
      });
    });
  };
  // 아이콘 클릭
  // $(document).ready(function() {
  //     $(".icon__box > div").on("click", function() {
  //         $(this).toggleClass("selected");
  //     });
  // });

  $(document).ready(function () {
    $(".icon__box > div").on("mousedown", function () {
      $(this).find("img").addClass("sepia");
      $(this).find("span").addClass("selected");
    });

    $(".icon__box > div").on("mouseup", function () {
      $(this).find("img").removeClass("sepia");
      $(this).find("span").removeClass("selected");
    });

    // 마우스가 요소 밖으로 나갔을 때 처리
    $(".icon__box > div").on("mouseleave", function () {
      $(this).find("img").removeClass("sepia");
      $(this).find("span").removeClass("selected");
    });
  });

  // 아이콘 드래그 효과
  // https://api.jqueryui.com/draggable/
  $(".icon1").draggable({
    containment: ".icon__box",
    scroll: false,
    drag: function () {
      $(".cursor img").attr("src", "images/w98move.cur"),
        $(".info").html("현재 Music Box를 드래그 중입니다."),
        $("header").css("background-color", "rgba(255,0,0,0.4)"),
        $("header").css("transition", "all 0.5s");
    },
    stop: function () {
      $(".cursor img").attr("src", "images/w98normal.cur"),
        $(".info").html("드래그가 끝났습니다."),
        $("header").css("background-color", ""),
        setTimeout(printAgent, 5000);
    },
  });
  $(".icon2").draggable({
    containment: ".icon__box",
    scroll: false,
    drag: function () {
      $(".cursor img").attr("src", "images/w98move.cur");
      $(".info").html("현재 Tetris를 드래그 중입니다.");
      $("header").css("background-color", "rgba(0,0,255,0.4)");
      $("header").css("transition", "all 0.5s");
    },
    stop: function () {
      $(".cursor img").attr("src", "images/w98normal.cur"),
        $(".info").html("드래그가 끝났습니다."),
        $("header").css("background-color", ""),
        setTimeout(printAgent, 5000);
    },
  });
  $(".icon3").draggable({
    containment: ".icon__box",
    scroll: false,
    drag: function () {
      $(".cursor img").attr("src", "images/w98move.cur");
      $(".info").html("현재 3번 폴더를 드래그 중입니다.");
      $("header").css("background-color", "rgba(0,255,0,0.4)");
      $("header").css("transition", "all 0.5s");
    },
    stop: function () {
      $(".cursor img").attr("src", "images/w98normal.cur"),
        $(".info").html("드래그가 끝났습니다."),
        $("header").css("background-color", ""),
        setTimeout(printAgent, 5000);
    },
  });
  // $(".icon4").draggable({
  //     containment: ".icon__box",
  //     scroll: false,
  //     drag: function () {
  //         $(".cursor img").attr("src", "images/w98move.cur");
  //         $(".info").html("현재 4번 폴더를 드래그 중입니다.");
  //         $("header").css("background-color", "rgb(255,255,0, 0.6)");
  //         $("header").css("transition", "all 0.5s");
  //     },
  //     stop: function () {
  //         $(".cursor img").attr("src", "images/w98normal.cur"),
  //             $(".info").html("드래그가 끝났습니다."),
  //             $("header").css("background-color", ""),
  //             setTimeout(printAgent, 5000);
  //     },
  // });
  // $(".icon5").draggable({
  //     containment: ".icon__box",
  //     scroll: false,
  //     drag: function () {
  //         $(".cursor img").attr("src", "images/w98move.cur");
  //         $(".info").html("현재 5번 폴더를 드래그 중입니다.");
  //         $("header").css("background-color", "rgba(255,105,180,0.4)");
  //         $("header").css("transition", "all 0.5s");
  //     },
  //     stop: function () {
  //         $(".cursor img").attr("src", "images/w98normal.cur"),
  //             $(".info").html("드래그가 끝났습니다."),
  //             $("header").css("background-color", ""),
  //             setTimeout(printAgent, 5000);
  //     },
  // });
  // $(".icon6").draggable({
  //     containment: ".icon__box",
  //     scroll: false,
  //     drag: function () {
  //         $(".cursor img").attr("src", "images/w98move.cur");
  //         $(".info    ").html("현재 6번 폴더를 드래그 중입니다.");
  //         $("header").css("background-color", "rgba(255,255,255,0.4)");
  //         $("header").css("transition", "all 0.5s");
  //     },
  //     stop: function () {
  //         $(".cursor img").attr("src", "images/w98normal.cur"),
  //             $(".info    ").html("드래그가 끝났습니다."),
  //             $("header").css("background-color", ""),
  //             setTimeout(printAgent, 5000);
  //     },
  // });
  $(".music__inner").draggable({
    scroll: false,
    handle: ".music__title",
    drag: function () {
      $(".cursor img").attr("src", "images/w98move.cur");
      $(".info    ").html("뮤직 플레이어를 드래그 중입니다.");
      $("header").css("background-color", "rgba(0,0,255,0.4)");
      $("header").css("transition", "all 0.5s");
    },
    stop: function () {
      $(".cursor img").attr("src", "images/w98normal.cur"),
        $(".info    ").html("드래그가 끝났습니다."),
        $("header").css("background-color", ""),
        setTimeout(printAgent, 5000);
    },
  });
  $(".music__list").draggable({
    scroll: false,
    handle: ".music__list__title",
    drag: function () {
      $(".cursor img").attr("src", "images/w98move.cur");
      $(".info    ").html("뮤직 리스트를 드래그 중입니다.");
      $("header").css("background-color", "rgba(0,0,255,0.4)");
      $("header").css("transition", "all 0.5s");
    },
    stop: function () {
      $(".cursor img").attr("src", "images/w98normal.cur"),
        $(".info    ").html("드래그가 끝났습니다."),
        $("header").css("background-color", ""),
        setTimeout(printAgent, 5000);
    },
  });
  $(".tetris__wrap").draggable({
    scroll: false,
    handle: ".tetris__title",
    drag: function () {
      $(".cursor img").attr("src", "images/w98move.cur");
      $(".info    ").html("Tetris를 드래그 중입니다.");
      $("header").css("background-color", "rgba(0,0,255,0.4)");
      $("header").css("transition", "all 0.5s");
    },
    stop: function () {
      $(".cursor img").attr("src", "images/w98normal.cur"),
        $(".info    ").html("드래그가 끝났습니다."),
        $("header").css("background-color", ""),
        setTimeout(printAgent, 5000);
    },
  });

  // 우측 하단 시간 출력
  function printTime() {
    let currentTime = new Date();
    let year = currentTime.getFullYear();
    let month = currentTime.getMonth() + 1;
    let date = currentTime.getDate();
    let hours = currentTime.getHours().toString().padStart(2, "0");
    let minutes = currentTime.getMinutes().toString().padStart(2, "0");
    let seconds = currentTime.getSeconds().toString().padStart(2, "0");

    let ampm = hours >= 12 ? "오후" : "오전"; // 12시 이후면 오후, 아니면 오전을 표기합니다.
    // 12시간 형식으로 변환합니다. 13시 이후는 1시부터 시작합니다.
    hours = hours % 12;
    hours = hours ? hours : 12; // 0을 12로 변경합니다. (0은 12시를 나타냅니다)

    $(".time").html(`${ampm} ${hours}:${minutes}`);
  }
  printTime();
  setInterval(printTime, 60000);

  // 우측 상단 모니터 정보 표시
  const printAgent = () => {
    let os = navigator.userAgent.toLocaleLowerCase();
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;

    if (os.indexOf("windows") !== -1) {
      $(".info").html(
        `현재 윈도우(Windows)를 사용하고 있으며, 화면 크기는 ${screenWidth} X ${screenHeight} 입니다.`
      );
    } else if (os.indexOf("mac") !== -1) {
      $(".info").html(
        `현재 맥(Mac)을 사용하고 있으며, 화면 크기는 ${screenWidth} X ${screenHeight} 입니다.`
      );
    } else if (os.indexOf("linux") !== -1) {
      $(".info").html(
        `현재 리눅스(Linux)를 사용하고 있으며, 화면 크기는 ${screenWidth} X ${screenHeight} 입니다.`
      );
    } else {
      $(".info").html(`화면 크기는 ${screenWidth} X ${screenHeight} 입니다.`);
    }
  };
  printAgent();

  // 윈도우 시작 버튼
  document.querySelector(".start-button").addEventListener("click", () => {
    document.querySelector(".start-menu-wrapper").classList.toggle("show");
  });
}

export default start;
