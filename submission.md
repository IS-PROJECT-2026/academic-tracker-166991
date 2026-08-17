# Project Submission Report

## 1. Student Details

- **Full Name:** Omwanda Philip Maxwell
- **GitHub Username:** PhilipOmwanda
- **Email:** philip.omwanda@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:**(https://IS-PROJECT-2026.github.io/academic-tracker-166991/)

---

## 3. Reflection — Grounded in Your Git History

> **Rules:** Every answer below **must include a direct link** to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.
>
> **Marks:** A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = **5 marks total**

### A. Your Best Commit

Paste the URL of the commit in your history that you think best demonstrates clean conventional commit practice (good type tag, clear subject, meaningful body or footer).

- **Commit URL:** (https://github.com/IS-PROJECT-2026/academic-tracker-166991/commit/28347b35407bf06e6f3f579b569b6c9b941c87a7)
- **Why this one?** This commit uses a clear `fix` type with a scoped subject line under 50 characters.

### B. A Mistake or Struggle

Link to a commit, PR, or issue where something went wrong — a bad commit message you had to fix, a branch you had to delete and recreate, a PR that needed rework, or a deployment that broke. 

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/academic-tracker-166991/commit/08219a272b0abf2e963d76296695db79abf9480c
- **What happened and how did you recover?** I declared `loadCourses()` above `STORAGE_KEY` and its helper functions, causing a "Cannot access before initialization" error that silently broke data persistence on page refresh. I reordered the declarations so `STORAGE_KEY`, `saveCourses`, and `loadCourses` were defined before use.

### C. A Pull Request You're Proud Of

Paste the URL of the PR that best shows your self-review process — one where the description is clear, the issue linkage is correct, and the diff tells a coherent story.

- **PR URL:** (https://github.com/IS-PROJECT-2026/academic-tracker-166991/pull/12)
- **What did you check before merging?** Before merging, I confirmed the GPA calculation logic, table rendering, and form-wiring were split into three distinct, individually reviewable commits rather than one large change, and manually tested the GPA calculation against known grade and credit combinations before merging.

### D. One Thing You Would Do Differently

If you had to restart this project from scratch with everything you know now, name one specific workflow decision you would change (not a code change — a Git/project management decision).

- **What would you change?** I would run the three required merge conflict exercises earlier in the week instead of leaving them until the end, since debugging an unexpected file-encoding issue — PowerShell's `echo` command creating UTF-16 files that Git treated as binary — cost me unneccessary time and frustration.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/academic-tracker-166991/pull/17

---

## 4. Screenshots of Key GitHub Features

Demonstrate your workflow mechanics by embedding your screenshots below.

### A. Milestones and Issues

<img width="912" height="496" alt="image" src="https://github.com/user-attachments/assets/c7c8b0d9-173f-432a-bc99-738261680e96" />

* **Caption:** Three milestones — Setup & Core UI, Feature Build, and Polish & Deploy — with 7/8 tracking issues linked and closed.

### B. Project Board

<img width="1919" height="854" alt="image" src="https://github.com/user-attachments/assets/d85c4ec7-af0b-4045-901e-8ab311ed74c4" />

* **Caption:**  Kanban board showing 7/8 issues moved through To Do, In Progress, and Done with one still In Progress.

### C. Branching Architecture

<img width="772" height="632" alt="image" src="https://github.com/user-attachments/assets/c393946b-0b80-4d54-92f5-80f3c8a88e08" />

* **Caption:** Full local and remote branch list showing conventional, issue-linked naming across `feat/`, `fix/`, `refactor/`, and `docs/` prefixes for every issue worked on (#1–#8), including bugfix branches created for the localStorage debugging.

### D. Pull Requests & Traceability
*Provide a screenshot of a completed or open Pull Request (PR) on GitHub that clearly shows it is linked to a related development issue.*

[PASTE YOUR PULL REQUEST SCREENSHOT DIRECTLY HERE]

* **Caption:** [Write a brief sentence describing your PR and what issue it closes]

---

## 5. Merge Conflict Evidence

You must engineer **three merge conflicts**, each triggered by a **different cause** from those covered in the lecture. For Conflict 1, document the full resolution lifecycle. For Conflicts 2 and 3, provide the conflict marker screenshot and identify the cause.

> **Marks:** Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = **5 marks total**

---

### Conflict 1 — Full Chronology

**What cause did you use?** Same-line content conflict

#### Step 1: Generating the Clash
*Screenshot showing the merge attempt and the conflict warning.*

<img width="519" height="149" alt="image" src="https://github.com/user-attachments/assets/113e4f31-452d-48e3-a910-966abc02978f" />


* **Caption:** branch-A and branch-B collided. Merging branch-B into main (after branch-A was already merged) triggered the warning: "CONFLICT (content): Merge conflict in js/app.js — Automatic merge failed; fix conflicts and then commit the result."

#### Step 2: Inside the Code Editor (Conflict Markers)
*Screenshot showing the raw, unresolved conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) in your editor.*

<img width="1188" height="361" alt="image" src="https://github.com/user-attachments/assets/c28eacde-2279-465c-b69e-7bc0a659e1f7" />


* **Caption:** the conflict was due to both modifying the same line in js/app.js. Chose the one that was cleanest.

#### Step 3: Resolution & Clean Merge
*Screenshot of your clean Git history or completed PR showing the conflict was resolved and merged.*

<img width="1414" height="607" alt="image" src="https://github.com/user-attachments/assets/2dc5e0c5-3792-412c-aa44-30d6bfb6e07b" />


* **Caption:** the conflicting "Version AAA" comment line was removed and replaced with a single clean header comment

---

### Conflict 2 — Different Cause

**What cause did you use?** Add-Add conflict

**Why does this cause trigger a conflict?** Two different branches(branch-C and branch-D) both independently created CHANGELOG.md with different content.

<img width="951" height="488" alt="add conflict" src="https://github.com/user-attachments/assets/12ac1a07-a1e8-4757-8c64-27e1314d0329" />

* **Caption:** branch-C and branch-D both independently created CHANGELOG.md with different content

---

### Conflict 3 — Different Cause

**What cause did you use?** Modify-Delete Conflict

**Why does this cause trigger a conflict?** branch-E deleted CHANGELOG.md while branch-F modified it, triggering the conflict.

<img width="743" height="124" alt="modify delete" src="https://github.com/user-attachments/assets/b5f59cfe-88d0-4138-b177-7ed102d1d275" />


* **Caption:** branch-E deleted CHANGELOG.md while branch-F modified it, triggering conflict.
