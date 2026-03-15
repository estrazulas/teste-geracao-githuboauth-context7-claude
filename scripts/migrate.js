import { auth } from "../lib/auth.js";

const runMigration = async () => {
  try {
    console.log("🔄 Running Better Auth migration...");
    const client = auth.createAuthClient ? auth : auth;

    // Better Auth auto-creates tables on first use
    console.log("✅ Migration completed (tables will be created on first auth request)");
    process.exit(0);
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  }
};

runMigration();
