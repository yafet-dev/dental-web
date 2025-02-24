# **Team Coding and Git Rules**  

## **1. Code Quality Guidelines**  

### **1.1 No Hardcoded Values**  
- Never use static values directly in the code.  
  
  **Bad Example:**  
  ```javascript
  const apiUrl = "http://localhost:3000/api"; // ❌ Hardcoded
  ```  
  
  **Good Example:**  
  ```javascript
  const apiUrl = process.env.REACT_APP_API_URL; // ✅ Uses environment variable
  ```  
- All configurable values (API URLs, keys, database credentials, etc.) **must be stored in `.env` files**.  
- If a value is used multiple times, store it in a **config file or a single constant variable** instead of repeating it.  

---

## **2. Branch Naming Rules**  
Every new branch should follow this naming convention:  
```
[github-username]/[type]/[short-description]
```
Example:  
```
yafet/feature/add-login-page
```

### **2.1 Types of Branches**  
| **Type**      | **Purpose** |
|--------------|------------|
| `feature/`   | Adding a new feature (e.g., `feature/add-user-profile`) |
| `fix/`       | Fixing a bug (e.g., `fix/login-issue`) |
| `hotfix/`    | Urgent production bug fixes (e.g., `hotfix/payment-crash`) |
| `refactor/`  | Improving code structure without changing functionality (e.g., `refactor/clean-api-calls`) |
| `test/`      | Writing or updating tests (e.g., `test/increase-coverage`) |
| `chore/`     | Maintenance tasks (e.g., `chore/update-dependencies`) |

---

## **3. Git Commit Message Format**  
Each commit message should follow this format:  
```
[type]: [short description]
```
Example commits:  
```
feat: Implement user authentication  
fix: Resolve checkout page error  
refactor: Optimize database queries  
test: Add unit tests for login API  
chore: Update dependencies and fix warnings  
```

---

## **4. Pull Request (PR) Guidelines**  
- **Always create a PR** instead of pushing directly to `main` or `develop`.  
- **PR titles** should be clear and match the branch name.  
- **Add a description** explaining what the PR does.  
- At least **one team member must review** before merging.  

---

By following these guidelines, we ensure **maintainability, scalability, and a clean Git history**. 🚀

