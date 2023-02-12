# Feed The Desert
HackBeanpot 2023 Project (Feb 10-12, 2023)

View website: [feedthedesert.com](feedthedesert.com) | [Video Demo](youtube.com)

## Inspiration
Our inspiration was originally derived from the desert theme of the hackathon, which made our group reflect on the deserts that exist within our communities. Throughout Boston , one of the most walkable cities in the U.S., there still exists many local neighborhoods without access to nutritious foods or affordable groceries. Boston has now become the second most expensive city to rent in the country, with grocery expenses averaging more than major metropolises like New York City. Coupled with inflation, underserved communities are in a struggle to afford food that is healthy, causing a risk of negative health conditions among members. To assist in developing solutions to this disparity, we put together databases and design algorithms that would be able to detect at-risk neighborhoods to promote further equitable developments.

## What it does
Our implementation allows for users of our website to view a map of Boston, outlining communities at risk of (or already) becoming food deserts through tracking grocery stores carrying fresh produces as well as community gardens in one mile radius. This visualization allows for various conclusions to be drawn surrounding what developments should be implemented in these areas, when considered alongside transit and infrastructure as well as spaces available for development.

## How we built it
We began with ideation Friday night. Then, came planning and outlining the tools we would need. We then delegated the tasks according to each member's experience. Thankfully, we had a variety of skills that allowed everyone to exercise their expertise! Grind day Saturday had everyone coming in and out to implement and debug.

The website was mocked up using Figma and is implemented with customized Bootstrap framework (HTML/CSS and JS) and hosted with Github pages. On the backend, we pulled location data from Yelp using Python scripts and the city of Boston census. Embedded in the website is a map with this data loaded into a Neo4j database, visualized using Leaflet.js in JavaScript to show our location data. 

## Challenges we ran into
Using Github pages to host a secure website with a custom domain that has the proper DNS records
Embedding the graph representation into the website
Learning new tools such as web dev and neo4j, using a Javascript driver to embed our neo4j data in the website
How to represent food deserts when we have locations of stores (the opposite of food deserts) in our database

## What's next for Feed the Desert
We didn't end up finding a perfect way to represent food deserts so that would be the first thing we finalize. Then, we could expand to other cities and towns. We could scrape data from Yelp in the same way we did for Boston. In the far future, we could look into automated scraping to update our database periodically.

## Accomplishments that we're proud of
Creating a user-friendly and responsive website UI
Storing, processing, and visualizing our location data
Learning new tools
Trying something new! More than half of our group participated in a hackathon for the first time.

## Tools used:
<ul>
  <li>Boostrap</li>
  <li>Figma</li>
  <li>HTML/CSS</li>
  <li>JavaScript</li>
  <li>Leaflet.js</li>
  <li>Neo4j</li>
  <li>Python</li>
  <li>Yelp API</li>
</ul>
