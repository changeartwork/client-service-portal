import { SimpleCard } from "app/components";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled,
  FormLabel,
  FormControl,
  Alert,
  AlertTitle
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import FileUpload from "react-material-file-upload";
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const JobForm = () => {

  const [state, setState] = useState({});
  const [files, setFiles] = useState([]);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [err, setErr] = useState({});

  let { user } = useAuth();

  const handleSubmit = (event) => {
    const bodyFormData = new FormData();
    bodyFormData.append('name', user.name);
    bodyFormData.append('mail', user.email);
    bodyFormData.append('contact', state.mobile);
    bodyFormData.append('memo', state.memo);
    bodyFormData.append('service_type', state.servicetype);
    for (const file of files) {
      bodyFormData.append('files', file)
    }
    console.log(bodyFormData)
    axios({
      method: "post",
      url: `${process.env.REACT_APP_JS_URL}/create`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        setFailure(false);
        console.log(response);
        setSuccess(true);
        setState({});
        setFiles([]);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
        setSuccess(false);
        setFailure(true);
        setErr(response)
        setState({});
        setFiles([]);
      });
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const {
    servicetype,
    memo,
    mobile
  } = state;

  return (
    <SimpleCard title="Place a Job">
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Service Type</FormLabel>
              <RadioGroup
                row
                name="servicetype"
                sx={{ mb: 2 }}
                value={servicetype || ""}
                defaultValue="DIGITIZING"
                onChange={handleChange}
              >
                <FormControlLabel
                  value="VECTOR_ART_WORK"
                  label="VECTOR ARTWORK"
                  labelPlacement="end"
                  control={<Radio color="secondary" />}
                />

                <FormControlLabel
                  value="DIGITIZING"
                  label="DIGITIZING"
                  labelPlacement="end"
                  control={<Radio color="secondary" />}
                />
              </RadioGroup>
            </FormControl>

            <TextField
              id="filled-multiline-static"
              multiline
              rows={4}
              type="text"
              name="memo"
              value={memo || ""}
              label="Request Details"
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <TextField
              type="text"
              name="mobile"
              value={mobile || ""}
              label="Mobile Nubmer"
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="I have read and agree to the terms of service."
            />

            <Button color="primary" variant="contained" type="submit">
              <Icon>send</Icon>
              <Span sx={{ pl: 1, textTransform: "capitalize" }}>Place Job</Span>
            </Button>

          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <FormLabel>Upload the source files</FormLabel>
            <FileUpload maxFiles={5} maxSize={1e+7} value={files} onChange={setFiles} />
          </Grid>
        </Grid>
      </ValidatorForm>
      <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
        {success && <Alert onClose={() => { setSuccess(false) }} severity="success">
          <AlertTitle>Success</AlertTitle>
          Job placed successfully <strong>check it out!</strong>
        </Alert>}
        {failure && <Alert onClose={() => { setFailure(false) }} severity="error">
          <AlertTitle>{err.message}</AlertTitle>
          {err.error}
        </Alert>}
      </Grid>
    </SimpleCard>
  );
};

export default JobForm;