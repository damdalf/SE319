# QuestLife Changelog

## 04/02/2022:
* Created new repository for the project.
* Finally imported the majority of Patrick's existing code to this new repository.
    * As of now, two known bugs exist:
    1) 'Possible Unhandled Promise Rejection' which occurs on line 43 in 'promiseRejectionTrackingOptions.js'. However, only occurs in emulator, not when running directly on physical device.
    2) The plus sign is unrecognized and gives the following error: "Urecognized font family 'material-community'".
## 04/03/2022:
* Resolved issues with unrecognized fonts.
* Changed the icons used for "Home" / "New Task" to be more sleek.
    * From AwesomeFont to AntDesign.
* Resolved issues with team members being unable to build application.
* Updated README.
## 04/04/2022:
* Resolved an issue in which the ability to mark a task as completed only worked on Android devices.
	* Now, the ability exists across both Android and iOS devices, while looking the same across both devices.
	* Added a 'CheckBox.js' component.
* Changed the size and position of the checkboxes.
* Changed the underline color of the text boxes when creating a new quest.
