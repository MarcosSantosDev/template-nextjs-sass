# Git Patterns

This repo adopts the `git-flow` branching model and naming conventions.

If you are not familiar with the `git-flow` branching model, please read:

1. [The original full article from Vincent Driessen](https://nvie.com/posts/a-successful-git-branching-model/)
2. [This tutorial from Atlassian team](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) that also does a great job explaining how `git-flow` branching model works

## 1 Branching

We follow git-flow so we have the following definitions:

- `main`: Production branch.
- `development`: Staging branch with the latest development version.
- `feature`: Branch containing new features to be added to `development`.
- `hotfix`: For critical bug solving.
- `bugfix`: For bug fixing during the development and testing phase internally.

Branches should follow the pattern: `<definition>/<description>`

**Example:** `feature/insert-card-component`

## 2 Commits

When writing commit messages we adhere as much as possible to the patterns suggested by [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary).

This convention has a set of rules to make the commit messages more meaningful and easier to read.

The based pattern of commit message is: `type(scope?): subject`
_Scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")_

**Example:** `feat(theme): change the color of main theme to red`

We use mainly the types: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`.

To understand more deeply the meaning of each commit type, please refer to the documentation at
[the Conventional Commits website](https://www.conventionalcommits.org/en/v1.0.0/#summary)

## 3 Merge Request

If you want to merge new code within the `development` branch you need to open a new `Merge Request` at gitlab.

It's very important to keep each change in individual commits to its original branch/pull request, and add a clear and meaningful title to each merge request.

When squashing a merge request the merge request title it's going to be the real commit message that will be added to the repository commit history.
