export * from "./Todo";

// helpers
const getRepository = (req, entity) => req.app.get("db").getRepository(entity);
const registerDatabaseAppContext = (req, db) => req.app.set("db", db);

export { getRepository, registerDatabaseAppContext };
