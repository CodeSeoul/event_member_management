# Contributing

Thanks for your interest in contributing! This document is a work in progress, so feel free to contribubte here, too.

Adapted from [this CONTRIBUTING.md from PurpleBook](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Table of Contents
* [How to Help](#how-to-help)
    * [Identifying Opportunities](#identifying-opportunities)
    * [Pull Request Process](#pull-request-process)
* [Code of Conduct](#code-of-conduct)
    * [Our Pledge](#our-pledge)
    * [Our Standards](#our-standards)
    * [Our Responsibilities](#our-responsibilities)
    * [Scope](#scope)
    * [Enforcement](#enforcement)
    * [Attribution](#attribution)

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

## How to Help

### Identifying Opportunities

1. Check Issues in this repository.
    * People new to the project are recommended to find something with a `good first issue` tag.
2. Discuss the issue to find any gaps in requirements or any clarification you need.
3. Request the issue be assigned to you.
4. Fork and make some changes!
5. Submit a Pull Request! See info below for details on that.

### How to Run It

1. Install [NodeJS](https://nodejs.org/) if you haven't already.
2. Install Docker for your system
   * [Windows](https://docs.docker.com/docker-for-windows/install/)
   * [Mac](https://docs.docker.com/docker-for-mac/install/)
   * [Linux](https://docs.docker.com/engine/install/#server)
3. Run `npm install` to setup dependencies
4. Run `npm run start:dockerLocal`
    * This creates and runs a MariaDB server and a NodeJS environment in containers via docker-compose.yml. Your project directory is mounted in the NodeJS container and will automatically restart the server process when you change files.
5. Check the API via [http://localhost:3000/](http://localhost:3000/)

#### Other NPM Scripts
* `build:docker` - Compiles TypeScript and builds a Docker image as `codeseoul/event_member_management:latest`.
* `start` - Compiles TypeScript and runs the compiled server.
* `start:dev` - Used inside the local Docker container. This runs the server using nodemon and will automatically restart on file changes.
* `start:database` - This starts only the MariaDB container user docker-compose.
* `stop:dockerAll` - Stops all containers started via docker-compose.
* `test` - Runs Jest tests, though still pending.

### Creating New Models
We're using [TypeORM](https://typeorm.io/), so you may want to take some time to familiarize with it. 

If you want to do TDD, just start with tests at the beginning.

Here's how to setup new models:
1. Run `typeorm migration:create -n Create<Model>Table` where `<Model>` is the name of the model you're creating.
2. Move the generated migration file to the `migrations` folder.
3. Using one of the previous migrations as an example, fill in the `up` and `down` functions.
4. If seed data is necessary, update the timestamp on the `DevSeedData` migration to be the latest timestamp, and add any necessary insertions.
    * If you already started the containers, you can run `npm run stop:dockerAll` to delete the database and application containers. This is necessary when updating existing migration data, as the migration will not be run if the system thinks it has already been run based on what it sees in the database.
5. Run `npm run start:dockerLocal` to bring up the local database and application container.
6. Create a new folder under `api` for your model, service, configs, and router to live in.
7. Create `model.ts`, `service.ts`, `config.ts`, `definition.ts`, and `router.ts` in that folder. You can copy these from another model directory.
8. Update `api/swagger/config.ts` to include your new definitions and tag in `swaggerSpecConfig`.
9. Update each file as needed. The container should automatically update, making testing and debugging easy.
    * You can test by hand using the Swagger console at `http://localhost:3000/docs`
10. Write unit tests in `api/__tests__/unit`, using existing unit tests as examples.
    * Database calls and any other external dependencies should be mocked by the testing system.
11. Write integration tests in `api/__tests__/integration`, using existing integration tests as examples.
    * External systems should be mocked externally, i.e. via Docker services in docker-compose. Tests should call the API. Supertest is recommended as can be found in existing tests. Really, these are more functional tests than integration tests, but whatever.
    * Dependent data should be created and cleaned up before and after testing, respectively.

### Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a
   build.
2. Update the README.md with details of changes to the interface, this includes new environment
   variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
   * **Note**: We have not yet released the project, so this step is not yet necessary. 
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you
   do not have permission to do that, you may request the second reviewer to merge it for you.

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or
  advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic
  address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at [our Discord](https://discord.gg/Qw5DdpTVdJ). All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
available at [http://contributor-covenant.org/version/1/4][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/