import { execSync } from "child_process";

function executeCommand(command) {
  try {
    execSync(command);
    return true;
  } catch {
    return false;
  }
}

function hasNoRelevantChanges() {
  return executeCommand(
    `git diff --quiet ${process.env.CACHED_COMMIT_REF} ${process.env.COMMIT_REF}`,
  );
}

function hasNonDeployableChanges() {
  const changes = execSync(
    `git diff --name-only ${process.env.CACHED_COMMIT_REF} ${process.env.COMMIT_REF}`,
  )
    .toString()
    .trim();
  return changes.split("\n").every((file) => /\.md$/.test(file));
}

function shouldSkipCommit() {
  const commitMessage = execSync("git log -1 --pretty=%B")
    .toString()
    .toLowerCase();
  return /\[skip ci\]|\[skip netlify\]|chore|wip|bug/.test(commitMessage);
}

if (shouldSkipCommit() || hasNoRelevantChanges() || hasNonDeployableChanges()) {
  process.exitCode = 0;
} else {
  process.exitCode = 1;
}
