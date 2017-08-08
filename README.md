# Renting car app demo

React-Redux app demo for renting cars between a selected date range.

It is made of a server API that provides car bookings, and a front-end that allows to check availability.

## Install and run

First, start server API:

```bash
cd server
npm install
npm start
```

Second, start the front-end:

```bash
cd .. // Root directory of the project
npm install
npm start
```

Now, browse to [http://localhost:8080](http://localhost:8080) and voilà!

## How to use it

When first loaded (no dates in date selectors) the booking lists represent the whole list of bookings in database.

If you select a start date and a end date, then the app will show you how many cars we hava available, and the bookings for that same date range.

## TO-DO

These are some things I'd like to implement:

- Validate: start date cannot be above end date.
- Format: if no cars are available, show the alert in red instead of green.
- Feature: save the searched booking in DB.
- Feature: select which type of car you'd like.
- Feature: delete bookings.
- Refactor: unit testing and BDD.

## License

MIT License

Copyright (c) 2017 Miguel Herrero

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
