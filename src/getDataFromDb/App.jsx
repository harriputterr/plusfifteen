import * as neo4j from "neo4j-driver";

export default function App() {

  let graphCoords = [];

  const driver = neo4j.driver(
    "bolt://44.203.222.144:7687",
    neo4j.auth.basic("neo4j", "roof-sounds-priority"),
  );

  const query = `
  MATCH (n: Coordinate)
  RETURN n;
  `;

  const session = driver.session({ database: "neo4j" });

  session
    .run(query)
    .then((result) => {
          result.records.forEach((data) => {
          graphCoords.push(data.get("n").properties)
          console.log(data.get("n").properties);
        })
      session.close();
      driver.close();
    })
    .catch((error) => {
      console.error(error);
    });
}
