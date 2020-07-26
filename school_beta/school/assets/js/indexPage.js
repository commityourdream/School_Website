const facultyChangeButton = document.getElementById("faculty-btn");
const updateSectionButton=document.getElementById("update-btn");
const updateSectionBody=document.getElementById("update-body");
facultyChangeButton.addEventListener(
  "click",
  handleFaculySectionExpandCollapse
);
updateSectionButton.addEventListener(
  "click",
  handleUpdatesSection
);
var isAllFacultyVisible=false,isUpdatePanelOpen = false;
function handleFaculySectionExpandCollapse() {
  const moreFacultySection = document.getElementById("faculty-more").classList;
  console.log(moreFacultySection);
  if (isAllFacultyVisible) {
    /** If All Faculty is visible then Clicking the button
     *should hide the faculties.
     *Also Change State of Button
     */
    moreFacultySection.add("hidden");
    facultyChangeButton.innerHTML = "Click for More";
  } else {
    /**   If All Faculty is visible then Clicking the button
     *should show the faculties.
     *Also Change State of Button
     */
    moreFacultySection.remove("hidden");
    facultyChangeButton.innerHTML = "Show Less";
  }
  isAllFacultyVisible=!isAllFacultyVisible
}
function handleUpdatesSection(){
  console.log("i came here");
  if (isUpdatePanelOpen) {
    updateSectionBody.classList.add("hidden");
    updateSectionButton.children[0].innerHTML="Latest Updates- Click to Open";
  }else{
    updateSectionBody.classList.remove("hidden");
    updateSectionButton.children[0].innerHTML="Latest Updates- Click to Close";
  }
  isUpdatePanelOpen=!isUpdatePanelOpen;
}
