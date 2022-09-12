
# How to Running with Docker
```
docker-compose up --build

website: localhost:3000
api: localhost:8000
```

preview: https://www.loom.com/share/1c1b823e9fd74113ab12905f35555b35
https://www.canva.com/design/DAFFffHvMRo/T2RUqPPOvLjjOXWFdu-AsA/view

# Debt Technical
1. Full fill Unitest
2. Responsive



# Firemark Full Stack Challenge (UI)

Thanks for taking part in Firemark's tech challenge for front-end engineers!

In this challenge, we'd like you to create a UI for a basic Note Taking App.
Your UI will need to integrate with a backend REST API, which has been provided for you
(usage instructions are below).

## Deliverables

* Original source code, including unit tests. (There are plenty of examples of these kinds of apps,
  but we want to see your coding skills)
* Relevant documentation, including but not limited to:
  * Any tech requirements, i.e., `yarn`, `npm` and others
  * Any commands to run the application.

Bear in mind that our evaluators run *nix systems (Linux and macOS).

## How to submit

Once you've finished your app, create a private repo in github an add our developers as collaborators:

- [AaronCooperFiremark](https://github.com/AaronCooperFiremark)
- [wayne-thomson-iag](https://github.com/wayne-thomson-iag)
- [ranajaydas](https://github.com/ranajaydas)

Please also email us back once you've added us and are ready for us to review your code.

## Language and other technologies

You're free to choose any programming language, framework, stack or tools that you want for your Web UI.

## Objectives

We're trying to evaluate some of your tech skills based on the following:

* You're able to choose technologies that made you productive, and you follow their good practices.
* You understand concepts such as REST, SPA and others.
* You write clear and good documentation, including instructions for other developers or DevOps that
  want to use or deploy your app.

## Requirements

A basic raw HTML file [index.html](index.html) is provided with the UI elements and layout needed
to implement your application.

The UI is self-explanatory. On the left hand, you have a form to add new notes, including a button
"Add Tag" to add tags one by one. The tags should be displayed below the input text (as the example)
with the option to be deleted. On the bottom of the form, you have two buttons one "Cancel" will delete
all the values in the form, including the tags and "Add Note" should create a new note in the backend.

On the right hand, we have a list of all the notes inside the system, including their tags; each tag is
clickable and will filter the list of notes by that particular tag (i.e., If I click on the "work" tag
it should show me all notes tagged with the "work" tag). The "Delete" button will delete the note.

You may wish to continue working on top of the provided HTML, or create your own UI from scratch.
Ultimately, we just want to see how you approach UI development and integration with a backend for
the scope of work requested.

### Extra points

Not needed but nice to have:

* _Style:_ The UI was created by an engineer and is "aesthetically challenged" to say the least. Can you
  make it prettier? Feel free to use any CSS framework.
* _UX:_ Any other improvement on UI/UX that you consider necessary to have a sound user experience (e.g.
  Notifications or error management)

## Running the backend REST API

To validate that your UI is fully functional and integrates well with a real REST API, we've provided a
functional backend.

You can follow the instructions listed in the [api/README.md](api/README.md) file to run the REST API
locally for your UI to connect to.

## Questions?

If you have any questions, you can contact any one of our developers:

- Aaron Cooper at [aaron.cooper@iag.com.au](mailto:aaron.cooper@iag.com.au)
- Wayne Thomson at [Wayne.Thomson@iag.com.au](mailto:Wayne.Thomson@iag.com.au)
- Ranajay Das at [ranajay.das@iag.com.au](mailto:ranajay.das@iag.com.au)
