# Company logos

Empty on purpose. `content/career.ts` renders a company as a wordmark unless
its `logo` field points at a file in here.

To use a real logo: drop the file in this folder and set `logo: "/logos/<file>"`
on the matching job. A monochrome SVG works best, since the rest of the site's
marks are monochrome and inherit the text colour.

Neither Agero nor Blue Apron ships one today. Agero publishes its logo as a
gradient Illustrator export with hidden layers, which does not flatten cleanly,
and Blue Apron blocks automated downloads.
