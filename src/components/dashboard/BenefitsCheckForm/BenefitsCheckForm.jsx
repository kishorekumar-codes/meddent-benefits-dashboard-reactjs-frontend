
import  { useState } from 'react';
import { Input, DatePicker, Button } from 'antd';
import dayjs from 'dayjs';

const BenefitsCheckForm = () => {
  const [patient, setPatient] = useState('');
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());

  const handleRunCheck = () => {
    console.log('Patient:', patient);
    console.log(
      'Start Date:',
      startDate ? startDate.format('YYYY-MM-DD') : null
    );
    console.log(
      'End Date:',
      endDate ? endDate.format('YYYY-MM-DD') : null
    );
  };

  // Disable end dates before start date
  const disabledEndDate = (current) => {
    if (!startDate) return false;
    return current && current.isBefore(startDate, 'day');
  };

  // Disable start dates after end date
  const disabledStartDate = (current) => {
    if (!endDate) return false;
    return current && current.isAfter(endDate, 'day');
  };

  return (
    <div className="benefits-card card">
      {/* Patient Name Section */}
      <div className="form-section">
        <div className="label-wrapper">
          <span className="common-title-secondary">
            Patient Name
          </span>
        </div>

        <Input
          placeholder="Enter Patient Name"
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
          className="custom-input"
        />
      </div>

      <div className="section-divider" />

      {/* Date Range Section */}
      <div className="form-section date-section">
        <div className="label-wrapper">
          <span className="common-title-secondary">
            Date Range
          </span>
        </div>

        <div className="date-pickers-container">
          <DatePicker
            value={startDate}
            onChange={setStartDate}
            disabledDate={disabledStartDate}
            format="DD MMM YYYY"
            allowClear={false}
            suffixIcon={null}
            className="custom-datepicker"
          />

          <span className="arrow-separator">→</span>

          <DatePicker
            value={endDate}
            onChange={setEndDate}
            disabledDate={disabledEndDate}
            format="DD MMM YYYY"
            allowClear={false}
            suffixIcon={null}
            className="custom-datepicker"
          />
        </div>
      </div>

      {/* Run Benefits Check Button */}
      <div className="action-section">
        <Button
          type="primary"
          onClick={handleRunCheck}
          className="run-check-btn"
        >
          Run Benefits Check
        </Button>
      </div>
    </div>
  );
};

export default BenefitsCheckForm;