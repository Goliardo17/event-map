import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type NewsProps = {
    title: string,
    body: string
}

export const NewsPost: React.FC<NewsProps> = ({ title, body }) => {
    return (
        <Accordion>
            <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >{title}</AccordionSummary>
        <AccordionDetails>
          <Typography>
            {body}
          </Typography>
        </AccordionDetails>
        </Accordion>
    )
}