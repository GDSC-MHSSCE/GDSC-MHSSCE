# Contributing

Thank you for considering contributing to GDSC-MHSSCE! This document will outline how to submit changes to this repository and which conventions to follow. If you are ever in doubt about anything we encourage you to reach out either by submitting an issue here or reaching out [via WhatApp](link).

## Prerequisites

- **You're familiar with GitHub Issues and Pull Requests**
- **You've read the doc given below.**
- **You've setup a test project**

## Issues before PRs

1. Before you start working on a change please make sure that there is an issue for what you will be working on. You can either find and [existing issue](https://github.com/GDSC-MHSSCE/GDSC-MHSSCE/issues) or [open a new issue](https://github.com/GDSC-MHSSCE/GDSC-MHSSCE/issues/new) if none exists. Doing this makes sure that others can contribute with thoughts or suggest alternatives, ultimately making sure that we only add changes that make

2. When you are ready to start working on a change you should first [fork the GDSC-MHSSCE repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) and [branch out](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository) from the `dev` branch.
3. Make your changes.
4. [Open a pull request towards the develop branch in the Medusa repo](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). Within a couple of days a MHSSCE team member will review, comment and eventually approve your PR.

### Branches

All changes should be part of a branch and submitted as a pull request - your branches should be prefixed with one of:

- `fix/` for bug fixes
- `feat/` for features
- `docs/` for documentation changes

### Commits

Strive towards keeping your commits small and isolated - this helps the reviewer understand what is going on and makes it easier to process your requests.

for example:

```
rectified some responsiveness issue for smaller screen size 🙂 {

    * css hover effect implemented
    * js logic integrated
    * ....
    * ....
  (from here on, state bugs that are still occurring in your version , if any )
    * shadow bug still exist -
    * firebase logic is messed up -
  }
```

(emoji is optional) being professional is good, but being friendly helps in longer run 😸

### Pull Requests

Once your changes are ready you must submit your branch as a pull request. Your pull request should be opened against the `dev` branch in the main GDSC-MHSSCE repo.

In your PR's description you should follow the structure:

- **What** - what changes are in this PR
- **Why** - why are these changes relevant
- **How** - how have the changes been implemented
- **Testing** - how has the changes been tested or how can the reviewer test the feature

We highly encourage that you do a self-review prior to requesting a review. To do a self review click the review button in the top right corner, go through your code and annotate your changes. This makes it easier for the reviewer to process your PR.

#### Merge Style

All pull requests are squashed and merged.

### Documentation

- We generally encourage to document your changes through comments in your code.
- If you alter user-facing behaviour you must provide documentation for such changes.

### Release

The GDSC-MHSSCE team will regularly create releases from the develop branch.
