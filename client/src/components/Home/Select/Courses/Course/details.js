import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { courseDescription } from '../../../../../actions/coursesActions';

class Details extends Component {
    componentDidMount() {
        this.props.courseDescription(localStorage.getItem('courseInfo'));
    }
    render() {
        return (
            <Jumbotron className='mt-5'>
                <div >
                    <div >
                        <h3>{this.props.selectedCourse}</h3>
                    </div>
                    <div >
                        <div >
                            <p>{this.props.description}</p>
                            <h3>Special Batches for IBPS PO 2015-16</h3>
                            <p>To work as a manager in the banking industry, the first stepping stone is becoming a Probationary Officer (PO). A PO starts as a trainee officer in the Junior Management Grade Scale (JMGS) of the bank and can rise to the highest levels, becoming a General Manager, an Executive Director or even the Chairman of the Bank.<br></br>
                        Various nationalized and Private banks conduct their own PO exams to recruit candidates. While different banks may have their own eligibility and selection criteria, the broad prescribed format is as listed below.</p>
                        </div>
                        <div >
                            <h3>PSBs – CWE PO/MT-V and CWE CLERK-V</h3>
                            <p>The Common Written Examination, conducted by the IBPS (Institute of Banking Personnel selection), is one of the most important exams for those who seek a career in banks in India. The CWE is the first step in the recruitment process for Management Trainees, Bank Probationary Officers, Specialist officers and Clerks for 19 Public Sector banks and Regional Rural banks. The participating banks (in the CWE) include premier banks like Bank of Baroda, Corporation Bank, Union Bank of India, etc..</p>
                            <p>It has been decided by the competent authority to hold two-tier examinations for recruitment of PO/MT and Clerks from CWE-V onwards i.e(TIER I and TIER II). All the candidates who successfully register themselves under CWE PO/MT-V and CWE CLERK-V will be called for Preliminary Examinations. Based on the performance in the preliminary examination, certain number of candidates will be shortlisted for each of these examinations. The short listed candidates will then be called for Main Examinations. There will be fewer number of questions in the Preliminary Examination with shorter duration. The details with regard to both the Preliminary and Main examinations will be made available on IBPS website through the detailed notifications in due course.</p>
                            <p>The marks obtained in the Preliminary examination will not be considered for preparing the final merit list and the marks obtained in the Main Examination will only be considered for short listing for interview.</p>
                        </div>
                        <div >
                            <h3>Process of Registration</h3>
                            <p>The registration process will be through online mode only and there will be a single registration for both Preliminary and Main examination, wherever applicable. Mode of Payment Mode of payment of fees/intimation charges will be only online and the channels for online.</p>
                        </div>
                        <div class="content clearfix">
                            <h3>Eligibility</h3>
                            <p>Any graduate within the age group of 21 to 30 years is eligible for the CWE. For candidates from reserved categories, relaxation in the upper age limit is available.</p>
                        </div>
                        <div >
                            <h3>Written Test Pattern</h3>
                            <p>This 2-hour test consists of 200 questions (1 mark per question, 1/4th negative marking for wrong answers) – 50 from Reasoning, 50 from Quantitative Aptitude, 40 from English Language, 40 from General Awareness and 20 from Computer Knowledge.</p>
                        </div>
                        <div>
                            <h3>Selection Process</h3>
                            <p>All candidates who aspire for bank PO posts need to appear for the CWE (PO/MT) and secure the minimum qualifying marks (or higher) in order to get their scorecards. After getting their scorecards, candidates must apply to the various banks that they are interested in. Each bank may then conduct further selection processes, such as Group Discussion, Interviews, etc., separately.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }
}

const mapStateToProps = state => ({
    selectedCourse: state.courses.courseForDetails,
    description: state.courses.courseDescription
})

export default connect(mapStateToProps, { courseDescription })(Details);