import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import InterviewsEntryHeader from "./InterviewsEntryHeader";
import plus from "../images/plus.png";
import "../App.css";
import {
  Centered,
  AppForm,
  CommentInput,
  Pstyle,
  Input,
  Button,
  AppIntBox,
  OuterWrapper,
  LinkStyle,
  Wrapper,
  AppIntWrapper,
  DividingLine,
} from "./styled";

const postAPI = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
  return response;
};

class InterviewsEntry extends Component {
  state = {
    user_id: this.props.user_id,
    application_id: this.props.match.params.app_id,
    company_id: this.props.match.params.company_id,
    round: "",
    interview_type: "",
    interview_date: "",
    interview_rating: "",
    interviewer: "",
    follow_up_person: "",
    follow_up_phone: "",
    follow_up_email: "",
    whiteboarding: "",
    code_challenge: "",
    comments: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.history.push("/applications");

    try {
      const {
        user_id,
        application_id,
        company_id,
        round,
        interview_type,
        interview_date,
        interview_rating,
        interviewer,
        follow_up_person,
        follow_up_phone,
        follow_up_email,
        whiteboarding,
        code_challenge,
        comments,
      } = this.state;

      const data = {
        user_id: user_id,
        application_id: application_id,
        company_id: company_id,
        round: round,
        interview_type: interview_type,
        interview_date: interview_date,
        interview_rating: interview_rating,
        interviewer: interviewer,
        follow_up_person: follow_up_person,
        follow_up_phone: follow_up_phone,
        follow_up_email: follow_up_email,
        whiteboarding: whiteboarding,
        code_challenge: code_challenge,
        comments: comments,
      };

      const url = "http://localhost:2000/interviewsEntry";
      const response = await postAPI(url, data);

      if (response.status === 200) {
        alert("Entry Created");
      }
      if (response.status !== 200) {
        alert("Unable to input entry. Please try again later.");
      }
    } catch (err) {
      return err;
    }
  };

  render() {
    const {
      round,
      interview_type,
      interview_date,
      interview_rating,
      interviewer,
      follow_up_person,
      follow_up_phone,
      follow_up_email,
      whiteboarding,
      code_challenge,
      comments,
    } = this.state;
    return (
      <div>
        <InterviewsEntryHeader />
        <Centered>
          <OuterWrapper>
            <Wrapper>
              <div>
                <Centered>
                  <AppForm>
                    <Link style={linkStyle} to={`/applicationform`}>
                      +App
                    </Link>
                  </AppForm>
                </Centered>
              </div>
              <br />
              <Centered>
                <LinkStyle>Add an Interview to Your Application</LinkStyle>
              </Centered>
              <AppIntWrapper>
                <AppIntBox>
                  <form onSubmit={(e) => this.handleSubmit(e)}>
                    <Pstyle>
                      What round of interview are you in?
                      <div className="form-check">
                        <label>
                          <input
                            type="radio"
                            onChange={this.handleChange}
                            name="round"
                            value="Round 1"
                            checked={round === "Round 1"}
                            className="form-check-input"
                          />{" "}
                          Round 1
                        </label>
                      </div>
                      <div className="form-check">
                        <label>
                          <input
                            type="radio"
                            onChange={this.handleChange}
                            name="round"
                            value="Round 2"
                            checked={round === "Round 2"}
                            className="form-check-input"
                          />{" "}
                          Round 2
                        </label>
                      </div>
                      <div className="form-check">
                        <label>
                          <input
                            type="radio"
                            onChange={this.handleChange}
                            name="round"
                            value="Round 3"
                            checked={round === "Round 3"}
                            className="form-check-input"
                          />{" "}
                          Round 3
                        </label>
                      </div>
                    </Pstyle>
                    <br />
                    <DividingLine></DividingLine>
                    <Pstyle>
                      What type of interview did you have?
                      <div className="form-check">
                        <label>
                          <input
                            type="radio"
                            onChange={this.handleChange}
                            name="interview_type"
                            value="In-Person"
                            checked={interview_type === "In-Person"}
                            className="form-check-input"
                          />{" "}
                          In-Person
                        </label>
                      </div>
                      <div className="form-check">
                        {" "}
                        <label>
                          <input
                            type="radio"
                            onChange={this.handleChange}
                            name="interview_type"
                            value="Phone"
                            checked={interview_type === "Phone"}
                            className="form-check-input"
                          />{" "}
                          Phone
                        </label>
                      </div>
                      <div className="form-check">
                        {" "}
                        <label>
                          <input
                            type="radio"
                            onChange={this.handleChange}
                            name="interview_type"
                            value="Video"
                            checked={interview_type === "Video"}
                            className="form-check-input"
                          />{" "}
                          Video
                        </label>
                      </div>
                      <div className="form-check">
                        {" "}
                        <label>
                          <input
                            type="radio"
                            onChange={this.handleChange}
                            name="interview_type"
                            value="Other"
                            checked={interview_type === "Other"}
                            className="form-check-input"
                          />{" "}
                          Other
                        </label>
                      </div>
                    </Pstyle>
                    <br />
                    <DividingLine></DividingLine>
                    <Pstyle>
                      What was the date of the interview?&nbsp;&nbsp;
                      <br />
                      <Input
                        type="date"
                        placeholder=""
                        onChange={this.handleChange}
                        name="interview_date"
                        value={interview_date}
                        required
                      />
                    </Pstyle>
                    <br />
                    <DividingLine></DividingLine>
                    <Pstyle>
                      How would you rate the interview process?&nbsp;&nbsp;
                      <div className="form-check">
                        <label>
                          <input
                            type="radio"
                            onChange={this.handleChange}
                            name="interview_rating"
                            value="Easy"
                            checked={interview_rating === "Easy"}
                            className="form-check-input"
                          />{" "}
                          Easy
                        </label>
                      </div>
                      <div className="form-check">
                        <label>
                          <input
                            type="radio"
                            onChange={this.handleChange}
                            name="interview_rating"
                            value="Moderate"
                            checked={interview_rating === "Moderate"}
                            className="form-check-input"
                          />{" "}
                          Moderate
                        </label>
                      </div>
                      <div className="form-check">
                        {" "}
                        <label>
                          <input
                            type="radio"
                            onChange={this.handleChange}
                            name="interview_rating"
                            value="Difficult"
                            checked={interview_rating === "Difficult"}
                            className="form-check-input"
                          />{" "}
                          Difficult
                        </label>
                      </div>
                    </Pstyle>
                    <br />
                    <DividingLine></DividingLine>
                    <Pstyle>
                      What is the interviewer's name?&nbsp;&nbsp;
                      <br />
                      <Input
                        type="text"
                        placeholder=""
                        onChange={this.handleChange}
                        name="interviewer"
                        value={interviewer}
                        required
                      />
                    </Pstyle>
                    <br />
                    <DividingLine></DividingLine>
                    <Pstyle>
                      What is the name of the person to follow-up
                      with?&nbsp;&nbsp;
                      <br />
                      <Input
                        type="text"
                        placeholder=""
                        onChange={this.handleChange}
                        name="follow_up_person"
                        value={follow_up_person}
                        required
                      />
                    </Pstyle>
                    <br />
                    <DividingLine></DividingLine>
                    <Pstyle>
                      What is the phone number of the person to follow up
                      with?&nbsp;&nbsp;
                      <br />
                      <Input
                        type="text"
                        placeholder=""
                        onChange={this.handleChange}
                        name="follow_up_phone"
                        value={follow_up_phone}
                        required
                      />
                    </Pstyle>
                    <br />
                    <DividingLine></DividingLine>
                    <Pstyle>
                      What is the email address of the person to follow-up
                      with?&nbsp;&nbsp;
                      <br />
                      <Input
                        type="text"
                        placeholder=""
                        onChange={this.handleChange}
                        name="follow_up_email"
                        value={follow_up_email}
                        required
                      />
                    </Pstyle>
                    <br />
                    <DividingLine></DividingLine>
                    <Pstyle>
                      Were you required to do whiteboarding for the interview?
                      <div className="form-check">
                        <label>
                          <input
                            type="radio"
                            onChange={this.handleChange}
                            name="whiteboarding"
                            value="Yes"
                            checked={whiteboarding === "Yes"}
                            className="form-check-input"
                          />{" "}
                          Yes
                        </label>
                      </div>
                      <div className="form-check">
                        <label>
                          <input
                            type="radio"
                            onChange={this.handleChange}
                            name="whiteboarding"
                            value="No"
                            checked={whiteboarding === "No"}
                            className="form-check-input"
                          />{" "}
                          No
                        </label>
                      </div>
                    </Pstyle>
                    <br />
                    <DividingLine></DividingLine>
                    <Pstyle>
                      Were you required to complete a code challenge?
                      <div className="form-check">
                        <label>
                          <input
                            type="radio"
                            onChange={this.handleChange}
                            name="code_challenge"
                            value="Yes"
                            checked={code_challenge === "Yes"}
                            className="form-check-input"
                          />{" "}
                          Yes
                        </label>
                      </div>
                      <div className="form-check">
                        <label>
                          <input
                            type="radio"
                            onChange={this.handleChange}
                            name="code_challenge"
                            value="No"
                            checked={code_challenge === "No"}
                            className="form-check-input"
                          />{" "}
                          No
                        </label>
                      </div>
                    </Pstyle>
                    <br />
                    <DividingLine></DividingLine>
                    <Pstyle>
                      Please provide additional comments here:&nbsp;&nbsp;
                      <br />
                      <CommentInput
                        type="text"
                        placeholder=""
                        onChange={this.handleChange}
                        name="comments"
                        value={comments}
                        required
                      />
                    </Pstyle>
                      <Button type="submit">Submit</Button>
                  </form>
                </AppIntBox>
              </AppIntWrapper>
            </Wrapper>
          </OuterWrapper>
        </Centered>
      </div>
    );
  }
}
const linkStyle = {
  color: "#00adb5",
  textDecoration: "none",
};

export default withRouter(InterviewsEntry);
