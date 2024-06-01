import { Divider, Grid, Slider, Typography } from "@mui/material";

const filters = [
  {
    category: "Work Mode",
    options: ["Work From Home", "Remote", "Hybrid"],
  },
  {
    category: "Experience",
    type: "range",
  },
  {
    category: "Location",
    options: ["Hyderabad", "Bangalore", "Chennai", "Delhi"],
  },
  {
    category: "Salary",
    options: ["0-3 lakhs", "3-6 lakhs", "6-9 lakhs", "9-12 lakhs"],
  },
  {
    category: "Company Type",
    options: ["Foreign MNC", "Corporate", "Indian MNC", "Startup"],
  },
  {
    category: "Education",
    options: ["Any Postgraduation", "Any Graduation", "MBA", "B.Tech/B.E"],
  },
  {
    category: "Top Companies",
    options: ["Accenture", "IBM", "Capgemini", "Infosys"],
  },
];

const JobFilters = () => {
  return (
    <div className="w-100 bg-teritiary p-2 rounded-2 job-filter">
      <Grid container className="mt-3 bg-none px-2 ">
        <Grid item xs={12}>
          <div>
            <div>
              <p className="poppins-semibold">All Filters</p>
              <hr />
              {filters.map((filter, index) => (
                <div key={index} className="mb-3">
                  <p className="poppins-semibold fs-6">{filter.category}</p>
                  {filter.type === "range" ? (
                    <div>
                      <Slider
                        defaultValue={0}
                        min={0}
                        max={50}
                        size="small"
                        color="dark"
                        className="custom-range"
                      />
                      <div className="d-flex justify-content-between">
                        <span>0 yrs</span>
                        <span>Any</span>
                      </div>
                    </div>
                  ) : (
                    filter.options.map((option, idx) => (
                      <div
                        key={idx}
                        className="d-flex flex-row justify-content-start align-items-center gap-2 pt-1"
                      >
                        <input
                          className=""
                          type="checkbox"
                          color="dark"
                          id={option.replace(/\s+/g, "")}
                        />
                        <label
                          className="poppins-light "
                          style={{ fontSize: "12px" }}
                          htmlFor={option.replace(/\s+/g, "")}
                        >
                          {option}
                        </label>
                      </div>
                    ))
                  )}

                  <hr />
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default JobFilters;
