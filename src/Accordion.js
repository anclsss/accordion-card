import React from "react";

export default function Accordion() {
  return (
    <main>
      <div className="box"></div>
      <div className="image-container"></div>
      <div className="card-details">
        <div className="pattern-container"></div>
        <h1>FAQ</h1>
        <details>
          <summary>How many team members can I invite?</summary>
          You can invite up to 2 additional users on the Free plan. There is no
          limit on team members for the Premium plan.
        </details>
        <details>
          <summary>What is the maximum file upload size?</summary>
          No more than 2GB. All files in your account must fit your allotted
          storage space.
        </details>
        <details>
          <summary>How do I reset my password?</summary>
          Click “Forgot password” from the login page or “Change password” from
          your profile page. A reset link will be emailed to you. storage space.
        </details>
        <details>
          <summary>Can I cancel my subscription?</summary>
          Yes! Send us a message and we'll process your request no questions
          asked.
        </details>
        <details>
          <summary>Do you provide additional support?</summary>
          Chat and email support is available 24/7. Phone lines are open during
          normal business hours.
        </details>
      </div>
    </main>
  );
}
