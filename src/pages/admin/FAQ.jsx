import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <>
      <div className="FAQ">
        <div className="faq_container">
          <div className="faq_header">{"Ko'p beriladigan savollar"}</div>

          <div className="row mt-5">
            <div className="col-8">
              <Accordion defaultExpanded className="my_accor">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography className="my_typo">1- savol</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="my_typo_2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda eligendi vel officia labore est sit ullam a. Quae,
                    aspernatur quidem ad illo, quod nisi dolorum saepe
                    laudantium cumque tempore doloremque?
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="my_accor">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography className="my_typo">1- savol</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="my_typo_2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda eligendi vel officia labore est sit ullam a. Quae,
                    aspernatur quidem ad illo, quod nisi dolorum saepe
                    laudantium cumque tempore doloremque?
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="my_accor">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography className="my_typo">1- savol</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="my_typo_2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda eligendi vel officia labore est sit ullam a. Quae,
                    aspernatur quidem ad illo, quod nisi dolorum saepe
                    laudantium cumque tempore doloremque?
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="col-4">
              <div className="contact_box">
                <div className="contact_header">Texnik muammolar uchun</div>
                <div className="contact_item">
                  <div className="contact_h">Ismingiz</div>
                  <div className="contact_inp">
                    <input type="text" placeholder="Ismingiz" />
                  </div>
                </div>
                <div className="contact_item">
                  <div className="contact_h">Telefon Raqamingiz</div>
                  <div className="contact_inp">
                    <input type="text" placeholder="+998977777777" />
                  </div>
                </div>
                <div className="contact_item">
                  <div className="contact_h">Xabaringiz</div>
                  <div className="contact_inp">
                    <textarea type="text" placeholder="Xabar matni" />
                  </div>
                </div>
                <div className="contact_btn">Yuborish</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
