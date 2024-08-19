export default function UserInput({ onUserInputChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onUserInputChange("initialInvestment", parseInt(event.target.value))
            }
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onUserInputChange("annualInvestment", parseInt(event.target.value))
            }
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onUserInputChange("expectedReturn", parseInt(event.target.value))
            }
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              onUserInputChange("duration", parseInt(event.target.value))
            }
          ></input>
        </p>
      </div>
    </section>
  );
}
