# Kittygram

## Description

- This Django+Postgre+Docker learning project is based on YandexPracticum's template (inc. React) and serves for your favourite cats to be added and boasted of online.
- The motivation behind is better learn this stack, except React which is a separate course with YaP, and include it in my resume portfolio for kickers.
- If you're passionate about sharing your feline pet's pix online, please be my guest and waste no more time reading this stuff)).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Licence](#license)

## Installation

### Local (for docker enthusiasts)

- Make sure your system has ```docker```, its ```compose``` plug-in and ```Ubuntu 22``` core for them containers to feed on
- An internet connection and SSH are somehow a must. Clone from [here](git@github.com:kirkoov/kittygram_final.git)
- ```cd``` to the ```kittygram_final``` folder
- run ```[sudo] docker compose -f docker-compose.production.yml up```
- open a Terminal for ```docker compose -f docker-compose.production.yml exec backend python manage.py collectstatic```, ```docker compose -f docker-compose.production.yml exec backend cp -r /app/collected_static/. /backend_static/static/```, ```docker compose -f docker-compose.production.yml exec backend python manage.py migrate``` 
- in your browser open your [localhost](http://localhost:9000)

### Remote

For a remote install, kindly contact me, since there's more to do.

## Usage (online)

- Register with a username and a pwd, use them to log in
- Upload your pet's pic under 3 Mb in size
- Spread the word))

## Credits

Fork from YandexPracticum's repo [here](https://github.com/yandex-praktikum/kittygram_final).

Follow their [courses](https://practicum.yandex.ru/catalog/programming/?from=main_header-programming_button) .

## Licence

MIT or help me take a better pick at [https://choosealicense.com/](https://choosealicense.com/).

## Features

Add a pic and some details on your pet and make it stand out; edit or delete if needed. Once logged in, you'll see all the registered users' cat pix on the main page.

## How to Contribute

Don't hesitate to contact in case you'd like to contribute. We'd both be better off reading the [Contributor Covenant](https://www.contributor-covenant.org/) which is a standard to start with.

## Tests

### Local

```cd``` to the project folder containing the ```pytest.ini``` and run ```pytest``` with your favourite virtual environment.

### Remote

The project tests are run remotely by the GitHubActions workflow scenario on every push to the main branch.
