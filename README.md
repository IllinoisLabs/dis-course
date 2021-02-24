# dis-course

<img src="https://img.shields.io/github/license/IllinoisLabs/dis-course" /> <img src="https://img.shields.io/github/stars/IllinoisLabs/dis-course?color=blueviolet">

A course discovery platform for University of Illinois students.

## Requirements

### Global Dependencies

- Node.js
- Yarn

### For Docker

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- CLang/Make
  - macOS: `xcode-select --install` or install [XCode Command-Line Tools](https://developer.apple.com/download/more/?=xcode)
  - Aptitude: `apt-get -y install make`

## Running Locally

### Dockerized (Recommended Method)

The containerized method allows for quick setup of a local develop environment running the client, api, and database.

**Ensure you have Docker Desktop Running**

#### Usage

The included [`Makefile`](./Makefile) provides Docker command wrappings with rich output for the following arguments:

#### Spinning Up A Development Instance

```bash
make up
```

#### Shutting Down An Instance

```bash
make down
```

#### Force Container Rebuild

```bash
make build
```

### Standalone

Standalone environments are great for working on a singular component of the application (e.g. the client) with little overhead.

#### Client (React App)

```bash
yarn && yarn start # install dependencies and start development environment
```

#### API (Express.js)

```bash
yarn && yarn start # install dependencies and start development environment
```

### Contributing

[Read more here.](./CONTRIB.MD)

### Misc.

#### Helpful Tools

- React Dev Tools (for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) and [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en))

---

Licensed under the [GNU Affero General Public License](./LICENSE)

&copy; 2021 [Illinois Labs](https://illinoislabs.org)
