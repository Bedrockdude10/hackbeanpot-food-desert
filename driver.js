

const uri = "bolt+s://4880961c56ecb6059750f38a0db86f46.neo4jsandbox.com:7687"
const user = "neo4j"
const password = "carrier-pea-swells"
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
const session = driver.session()

// try {
//     const result = await session.executeWrite(tx =>
//         tx.run(
//             'MATCH (a) RETURN a',
//             { message: 'hello, world' }
//         )
//     )
//
//     const singleRecord = result.records[0]
//     const greeting = singleRecord.get(0)
//
//     console.log(greeting)
// } finally {
//     await session.close()
// }
//
// // on application exit:
// await driver.close()