<h1> NovelNote - A collaborative writing space </h1>

NovelNote exists to make the writing process as smooth as possible for creators through a well structured interface. The main application of this project over other similar websites is its focus on collaborative writing functionality allowing multiple authors to work seamlessly on the same work.

<h2>Main domain objects</h2>

<table> <td> Object </td> <td> Relation</td> <td> Description</td>
  <tr>  <td> Book </td> <td> Root </td> <td> Top level object.</td> </tr>
  <tr> <td> Chapter</td> <td> Book -> Chapter </td> <td> Describes one chapter of the book. </td></tr>
  <tr> <td> Scene </td> <td> Chapter -> Scene </td> <td> Smallest object in a book. A Chapter is made up of multiple scenes.</td></tr>
</table>

<h2> Technology stack</h2>

<table>
<td> Layer</td> <td> Technology</td>
<tr> <td> Frontend</td> <td> React</td></tr>
<tr> <td> Routing</td> <td> React Router v6</td></tr>
<tr> <td> API Client</td> <td> Postman</td></tr>
<tr> <td> Backend </td> <td> ExpressJS</td></tr>
<tr> <td> ORM</td> <td> Prisma ORM</td></tr>
<tr> <td> Database </td> <td> PostgreSQL</td></tr>
  
</table>
