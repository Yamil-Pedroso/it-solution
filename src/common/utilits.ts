
export const stickyNav = (extraClass: any) => {
  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    const sticky = document.querySelectorAll(
      extraClass ? `.${extraClass}` : ".absolution-animated"
    );
    for (let i = 0; i < sticky.length; i++) {
      const stick = sticky[i];
      if (extraClass) {
        if (stick) {
          if (offset > 10) {
            stick.classList.add("absolution-hide-top");
          } else {
            stick.classList.remove("absolution-hide-top");
          }
        }
      } else {
        if (stick) {
          if (offset > 10) {
            stick.classList.remove("absolution-top-panel-transparent");
          } else {
            stick.classList.add("absolution-top-panel-transparent");
          }
        }
      }
    }
  });
};

export const milButtonClick = () => {
  const milTabButtons = document.querySelectorAll(".absolution-tab-buttons a");
  milTabButtons.forEach((a) => {
    a.addEventListener("click", () => {
      milTabButtons.forEach((element) => {
        element.classList.remove("absolution-active");
      });
      a.classList.add("absolution-active");
    });
  });
};
export const milButtonClick2 = () => {
  const milTabButtons = document.querySelectorAll(".absolution-tabs-left-nav a");
  milTabButtons.forEach((a) => {
    a.addEventListener("click", () => {
      milTabButtons.forEach((element) => {
        element.classList.remove("absolution-active");
      });
      a.classList.add("absolution-active");
    });
  });
};

export const accordion = () => {
  let acc = document.getElementsByClassName("absolution-accordion") as any;
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("absolution-active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    };
  }
};
