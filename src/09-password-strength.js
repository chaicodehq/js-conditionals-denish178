/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  let criteriaMet = 0;

  // If password is non-string
  if (typeof password !== "string") {
    return "weak";
  }

  // If password length is 0
  if (password.length === 0) {
    return "weak";
  }

  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasNumber = false;
  let hasSpecialChar = false;

  const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  for (let i = 0; i < password.length; i++) {
    const ch = password[i];

    if (ch >= "A" && ch <= "Z") {
      hasUpperCase = true;
    } else if (ch >= "a" && ch <= "z") {
      hasLowerCase = true;
    } else if (ch >= "0" && ch <= "9") {
      hasNumber = true;
    } else if (specialChars.includes(ch)) {
      hasSpecialChar = true;
    }
  }

  if (password.length >= 8) {
    criteriaMet++;
  }

  if (hasUpperCase === true) criteriaMet++;
  if (hasLowerCase === true) criteriaMet++;
  if (hasNumber === true) criteriaMet++;
  if (hasSpecialChar === true) criteriaMet++;

  // Strength evaluation

  if (criteriaMet <= 1) {
    return "weak";
  } else if (criteriaMet <= 3) {
    return "medium";
  } else if (criteriaMet === 4) {
    return "strong";
  } else {
    return "very strong";
  }
}
