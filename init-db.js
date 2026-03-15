import Database from "better-sqlite3";
import fs from "fs";

// Create database file
const db = new Database("./better-auth.sqlite");

// Run Better Auth schema creation
const schema = `
-- Users table
CREATE TABLE IF NOT EXISTS user (
    id TEXT PRIMARY KEY,
    name TEXT,
    email TEXT UNIQUE,
    emailVerified INTEGER,
    image TEXT,
    createdAt INTEGER,
    updatedAt INTEGER
);

-- Accounts table (for OAuth)
CREATE TABLE IF NOT EXISTS account (
    id TEXT PRIMARY KEY,
    userId TEXT NOT NULL,
    type TEXT,
    provider TEXT,
    providerAccountId TEXT,
    refreshToken TEXT,
    accessToken TEXT,
    expiresAt INTEGER,
    tokenType TEXT,
    scope TEXT,
    idToken TEXT,
    sessionState TEXT,
    createdAt INTEGER,
    updatedAt INTEGER,
    FOREIGN KEY (userId) REFERENCES user(id)
);

-- Sessions table
CREATE TABLE IF NOT EXISTS session (
    id TEXT PRIMARY KEY,
    userId TEXT NOT NULL,
    expiresAt INTEGER,
    ipAddress TEXT,
    userAgent TEXT,
    createdAt INTEGER,
    updatedAt INTEGER,
    FOREIGN KEY (userId) REFERENCES user(id)
);

-- Verification tokens table
CREATE TABLE IF NOT EXISTS verification (
    id TEXT PRIMARY KEY,
    identifier TEXT,
    value TEXT,
    expiresAt INTEGER,
    createdAt INTEGER,
    updatedAt INTEGER
);
`;

schema.split(";").forEach((statement) => {
  if (statement.trim()) {
    try {
      db.exec(statement);
      console.log("✅ Table created:", statement.match(/CREATE TABLE IF NOT EXISTS (\w+)/)?.[1]);
    } catch (error) {
      console.log("⚠️ Table already exists or error:", error.message);
    }
  }
});

db.close();
console.log("✅ Database initialized successfully!");
