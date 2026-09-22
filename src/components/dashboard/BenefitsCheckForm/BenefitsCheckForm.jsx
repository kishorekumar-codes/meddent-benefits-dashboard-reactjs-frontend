  import { useState } from "react";
  import { DatePicker, Button } from "antd";
  import CreatableSelect from "react-select/creatable";
  import dayjs from "dayjs";

  import QueueData from "../../../data/QueueData";

  const BenefitsCheckForm = ({
    selectedPatient,
    onRunBenefitsCheck,
  }) => {
    const [patient, setPatient] = useState(selectedPatient);

    const [startDate, setStartDate] = useState(dayjs());

    const [endDate, setEndDate] = useState(dayjs());

    // Disable end dates before start date
    const disabledEndDate = (current) => {
      if (!startDate) return false;

      return current && current.isBefore(startDate, "day");
    };

    // Disable start dates after end date
    const disabledStartDate = (current) => {
      if (!endDate) return false;

      return current && current.isAfter(endDate, "day");
    };

    // Dropdown styles
    // const selectStyles = {
    //   // Keep your existing control/input styles unchanged
    //   control: (base) => ({
    //     ...base,
    //     minHeight: "40px",
    //     height: "40px",
    //     borderRadius: "8px",
    //     borderColor: "#cbd5e1",
    //     boxShadow: "none",

    //     "&:hover": {
    //       borderColor: "#cbd5e1",
    //     },
    //   }),

    //   valueContainer: (base) => ({
    //     ...base,
    //     height: "40px",
    //     padding: "0 12px",
    //   }),

    //   input: (base) => ({
    //     ...base,
    //     margin: 0,
    //     padding: 0,
    //     paddingLeft: "20px",
    //     fontSize: "13px",
    //   }),

    //   singleValue: (base) => ({
    //     ...base,
    //     marginLeft: "20px",
    //     color: "#1e293b",
    //     fontSize: "13px",
    //     fontWeight: 500,
    //   }),

    //   placeholder: (base) => ({
    //     ...base,
    //     marginLeft: "20px",
    //     color: "#94a3b8",
    //     fontSize: "13px",
    //   }),

    //   // DROPDOWN ONLY
    //   menu: (base) => ({
    //     ...base,
    //     zIndex: 1000,
    //     fontSize: "13px",
    //     border: "1px solid #7dd3fc",
    //     borderRadius: "8px",
    //     overflow: "hidden",
    //   }),

    //   option: (base, state) => ({
    //     ...base,
    //     padding: "10px 12px",
    //     paddingLeft: "32px",

    //     backgroundColor: state.isSelected
    //       ? "#e0f2fe"
    //       : state.isFocused
    //         ? "#bae6fd"
    //         : "#ffffff",

    //     color: state.isSelected
    //       ? "#075985"
    //       : "#1e293b",

    //     fontWeight: state.isSelected ? 600 : 400,

    //     cursor: "pointer",

    //     "&:active": {
    //       backgroundColor: "#bae6fd",
    //     },
    //   }),
    // };

    const selectStyles = {
      control: (base) => ({
        ...base,
        minHeight: "40px",
        height: "40px",
        borderRadius: "8px",
        borderColor: "#cbd5e1",
        boxShadow: "none",

        "&:hover": {
          borderColor: "#cbd5e1",
        },
      }),

      valueContainer: (base) => ({
        ...base,
        height: "40px",
        padding: "0 12px",
      }),

      input: (base) => ({
        ...base,
        margin: 0,
        padding: 0,
        paddingLeft: "20px",
        fontSize: "13px",
      }),

      singleValue: (base) => ({
        ...base,
        marginLeft: "20px",
        color: "#1e293b",
        fontSize: "13px",
        fontWeight: 500,
      }),

      placeholder: (base) => ({
        ...base,
        marginLeft: "20px",
        color: "#94a3b8",
        fontSize: "13px",
      }),

      menu: (base) => ({
        ...base,
        zIndex: 1000,
        fontSize: "13px",
      }),

      option: (base, state) => ({
        ...base,
        padding: "10px 12px",
        paddingLeft: "32px",

        backgroundColor: state.isSelected
          ? "#2563eb"
          : state.isFocused
            ? "#eff6ff"
            : "#ffffff",

        color: state.isSelected
          ? "#ffffff"
          : "#1e293b",

        cursor: "pointer",
      }),
    };

    // Convert QueueData into react-select options
    const getPatientOptions = (patients) => {
      return patients
        .slice(0, 4)
        .map((patient) => ({
          value: patient.id,
          label: patient.name,
        }));
    };

    const patientOptions = getPatientOptions(QueueData);

    // Patient selection
    const handlePatientChange = (selectedOption) => {
      setPatient(selectedOption);
    };

    // Run Benefits Check
    const handleRunCheck = () => {
      if (!patient) {
        console.log("Please select or enter a patient.");
        return;
      }

      console.log("Patient:", patient);

      console.log(
        "Start Date:",
        startDate
          ? startDate.format("YYYY-MM-DD")
          : null
      );

      console.log(
        "End Date:",
        endDate
          ? endDate.format("YYYY-MM-DD")
          : null
      );

      // Send selected patient to Dashboard
      onRunBenefitsCheck(patient);
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

          <CreatableSelect
            options={patientOptions}
            value={patient}
            onChange={handlePatientChange}
            placeholder="Select Or Enter Patient Name"
            isSearchable
            isClearable
            styles={selectStyles}
            className="patient-select"
            classNamePrefix="patient"
            formatCreateLabel={(inputValue) =>
              `Use "${inputValue}"`
            }
            getNewOptionData={(inputValue, optionLabel) => ({
              value: inputValue,
              label: optionLabel,
              isCustom: true,
            })}
          />
        </div>

        <div className="section-divider" />

        {/* Date Range Section */}
        <div className="form-section date-section">
          <div className="label-wrapper">
            <span className="common-title-secondary">
              Appointment Date Range
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

            <span className="arrow-separator">
              →
            </span>

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