(()=>{"use strict";document.querySelectorAll("button").forEach((e=>{e.addEventListener("mouseover",(()=>{"clicked"!==e.className&&e.setAttribute("class","hovered")})),e.addEventListener("mouseout",(()=>{"clicked"!==e.className&&e.removeAttribute("class")})),e.addEventListener("click",(()=>{let t=document.querySelector(".clicked");null==t||t.removeAttribute("class"),e.setAttribute("class","clicked")}))})),document.getElementById("important").addEventListener("click",(()=>{document.getElementById("content").remove();const e=document.createElement("div");e.id="content";const t=document.createElement("div");t.innerText="Important",t.id="tittle",e.appendChild(t),document.body.appendChild(e)})),document.getElementById("all-tasks").addEventListener("click",(()=>{document.getElementById("content").remove();const e=document.createElement("div");e.id="content";const t=document.createElement("div");t.innerText="All tasks",t.id="tittle",e.appendChild(t),document.body.appendChild(e)})),document.getElementById("today").addEventListener("click",(()=>{document.getElementById("content").remove();const e=document.createElement("div");e.id="content";const t=document.createElement("div");t.innerText="Today",t.id="tittle",e.appendChild(t),document.body.appendChild(e)})),document.getElementById("next-seven-days").addEventListener("click",(()=>{document.getElementById("content").remove();const e=document.createElement("div");e.id="content";const t=document.createElement("div");t.innerText="All tasks",t.id="tittle",e.appendChild(t),document.body.appendChild(e)}));const e=document.getElementById("todos");e.addEventListener("click",(()=>(e=>{document.getElementById("content").remove();const t=document.createElement("div");t.id="content";const n=document.createElement("p");n.innerText=e,n.id="tittle";const d=document.createElement("button");d.innerText="Add Task",t.appendChild(n),t.appendChild(d),document.body.appendChild(t)})(e.innerText))),(()=>{const e=document.getElementById("new-project"),t=document.getElementById("add-project"),n=document.getElementById("add"),d=document.getElementById("cancel"),c=document.getElementById("projects-list"),l=document.getElementById("input");t.addEventListener("click",(()=>{t.style.display="none",e.style.display="flex"})),d.addEventListener("click",(()=>{e.style.display="none",t.style.display="inline",l.value=""})),n.addEventListener("click",(()=>{const n=document.createElement("button");n.innerText=l.value,c.insertBefore(n,t),e.style.display="none",t.style.display="inline",l.value=""}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLE1BQU0sSUFLckNKLEVBQWFyQixpQkFBaUIsU0FBUSxLQUNsQ2tCLEVBQVdNLE1BQU1DLFFBQVUsT0FDM0JOLEVBQWlCSyxNQUFNQyxRQUFVLFNBQ2pDRixFQUFNRyxNQUFRLEVBQUUsSUFHcEJOLEVBQVVwQixpQkFBaUIsU0FBUSxLQUMvQixNQUFNMkIsRUFBbUIvQixTQUFTYSxjQUFjLFVBQ2hEa0IsRUFBaUJmLFVBQVlXLEVBQU1HLE1BRW5DSixFQUFhTSxhQUFhRCxFQUFrQlIsR0FDNUNELEVBQVdNLE1BQU1DLFFBQVUsT0FDM0JOLEVBQWlCSyxNQUFNQyxRQUFVLFNBQ2pDRixFQUFNRyxNQUFRLEVBQUUsR0FNcEIsRU44QkosRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2ltcG9ydGFudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9hbGxUYXNrcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy90b2RheS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9uZXh0U2V2ZW5EYXlzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL3Byb2plY3RDb250ZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2FkZFByb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGltcG9ydGFudCBmcm9tIFwiLi9pbXBvcnRhbnRcIjtcblxuaW1wb3J0IGFsbFRhc2tzIGZyb20gXCIuL2FsbFRhc2tzXCI7XG5cbmltcG9ydCBuZXh0U2V2ZW5EYXlzIGZyb20gXCIuL25leHRTZXZlbkRheXNcIjtcblxuaW1wb3J0IHRvZGF5IGZyb20gXCIuL3RvZGF5XCI7XG5cbmltcG9ydCB0b2RvcyBmcm9tIFwiLi90b2Rvc1wiO1xuXG5pbXBvcnQgYWRkUHJvamVjdCBmcm9tIFwiLi9hZGRQcm9qZWN0XCI7XG5cbmltcG9ydCBwcm9qZWN0Q29udGVudCBmcm9tIFwiLi9wcm9qZWN0Q29udGVudFwiO1xuICAgICAgIFxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG5cblxuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgICgpPT4ge1xuICAgIFxuICAgIGlmKGJ1dHRvbi5jbGFzc05hbWUgIT09XCJjbGlja2VkXCIpe1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hvdmVyZWQnKTtcbiAgICB9XG59KTtcblxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgICgpPT4ge1xuICAgIFxuICAgIGlmKGJ1dHRvbi5jbGFzc05hbWUgIT09XCJjbGlja2VkXCIpe1xuICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7fVxuXG59KTtcblxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgICgpPT4ge1xuICAgIFxuICAgIGxldCBwcmV2aXVzbHlDbGlja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGlja2VkXCIpO1xuICAgIFxuICAgIGlmIChwcmV2aXVzbHlDbGlja2VkPT1udWxsKXt9ZWxzZXtcbiAgICAgICAgcHJldml1c2x5Q2xpY2tlZC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgfVxuICAgIFxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NsaWNrZWQnKTtcbiAgICBcbiAgICBcbn0pO1xuXG5cbn0pO1xuXG5cbmNvbnN0IGltcG9ydGFudEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1wb3J0YW50XCIpO1xuaW1wb3J0YW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGltcG9ydGFudCk7XG5cbmNvbnN0IGFsbFRhc2tzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtdGFza3NcIik7XG5hbGxUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixhbGxUYXNrcyk7XG5cbmNvbnN0IHRvZGF5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheVwiKTtcbnRvZGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRvZGF5KTtcblxuY29uc3QgbmV4dFNldmVuRGF5c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dC1zZXZlbi1kYXlzXCIpO1xubmV4dFNldmVuRGF5c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixuZXh0U2V2ZW5EYXlzKTtcblxuY29uc3QgdG9kb3NCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zXCIpO1xudG9kb3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PiBwcm9qZWN0Q29udGVudCh0b2Rvc0J1dHRvbi5pbm5lclRleHQpKTtcblxuXG5hZGRQcm9qZWN0KCk7XG5cblxuXG4iLCJjb25zdCBpbXBvcnRhbnQgPSAoKT0+e1xuICAgIGNvbnN0IGN1cnJlbnRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGN1cnJlbnRDb250ZW50LnJlbW92ZSgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcbiAgICBjb25zdCB0aXR0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdHRsZS5pbm5lclRleHQ9XCJJbXBvcnRhbnRcIjtcbiAgICB0aXR0bGUuaWQ9XCJ0aXR0bGVcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdHRsZSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW1wb3J0YW50OyIsImNvbnN0IGFsbFRhc2tzID0gKCk9PntcbiAgICBjb25zdCBjdXJyZW50Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjdXJyZW50Q29udGVudC5yZW1vdmUoKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG4gICAgY29uc3QgdGl0dGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXR0bGUuaW5uZXJUZXh0PVwiQWxsIHRhc2tzXCI7XG4gICAgdGl0dGxlLmlkPVwidGl0dGxlXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXR0bGUpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsbFRhc2tzOyIsImNvbnN0IHRvZGF5ID0gKCk9PntcbiAgICBjb25zdCBjdXJyZW50Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjdXJyZW50Q29udGVudC5yZW1vdmUoKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG4gICAgY29uc3QgdGl0dGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXR0bGUuaW5uZXJUZXh0PVwiVG9kYXlcIjtcbiAgICB0aXR0bGUuaWQ9XCJ0aXR0bGVcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdHRsZSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9kYXk7IiwiY29uc3QgbmV4dFNldmVuRGF5cyA9ICgpPT57XG4gICAgY29uc3QgY3VycmVudENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY3VycmVudENvbnRlbnQucmVtb3ZlKCk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICAgIGNvbnN0IHRpdHRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0dGxlLmlubmVyVGV4dD1cIkFsbCB0YXNrc1wiO1xuICAgIHRpdHRsZS5pZD1cInRpdHRsZVwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0dGxlKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXh0U2V2ZW5EYXlzOyIsIiBjb25zdCBwcm9qZWN0Q29udGVudCA9IChuYW1lKT0+e1xuICAgIGNvbnN0IGN1cnJlbnRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGN1cnJlbnRDb250ZW50LnJlbW92ZSgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcbiAgICBjb25zdCB0aXR0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aXR0bGUuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICB0aXR0bGUuaWQ9XCJ0aXR0bGVcIjtcbiAgICBjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBuZXdUYXNrQnV0dG9uLmlubmVyVGV4dD1cIkFkZCBUYXNrXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXR0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuIH1cblxuIGV4cG9ydCBkZWZhdWx0IHByb2plY3RDb250ZW50OyIsImNvbnN0IGFkZFByb2plY3QgPSAoKT0+e1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0XCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0XCIpXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRcIik7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxcIik7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1saXN0XCIpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFwiKTtcbiAgICBcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdERpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgXG4gICAgfSlcblxuICAgIFxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBwcm9qZWN0RGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgfSlcblxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAvKiAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pOyAqL1xuICAgICAgICBwcm9qZWN0c0xpc3QuaW5zZXJ0QmVmb3JlKG5ld1Byb2plY3RCdXR0b24sIGFkZFByb2plY3RCdXR0b24pXG4gICAgICAgIHByb2plY3REaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiIFxuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgfSlcbiAgICBcbiAgICBmdW5jdGlvbiBOZXdQcm9qZWN0KG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRQcm9qZWN0OyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInByZXZpdXNseUNsaWNrZWQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJjb250ZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwidGl0dGxlIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJib2R5IiwidG9kb3NCdXR0b24iLCJuYW1lIiwibmV3VGFza0J1dHRvbiIsInByb2plY3REaXYiLCJhZGRQcm9qZWN0QnV0dG9uIiwiYWRkQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwicHJvamVjdHNMaXN0IiwiaW5wdXQiLCJzdHlsZSIsImRpc3BsYXkiLCJ2YWx1ZSIsIm5ld1Byb2plY3RCdXR0b24iLCJpbnNlcnRCZWZvcmUiXSwic291cmNlUm9vdCI6IiJ9