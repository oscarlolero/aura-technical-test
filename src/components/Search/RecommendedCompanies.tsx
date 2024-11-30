import {Box, Typography} from "@mui/material";
import plusIcon from "../../assets/images/icons/plus-icon.svg";
import {Company} from "./SearchData.tsx";

interface RecommendedCompaniesProps {
  recommendedCompanies: Company[];
  handleSelectedCompany: (newCompany: Company) => void;
  selectedCompaniesLength: number;
}

export default function RecommendedCompanies({recommendedCompanies, handleSelectedCompany, selectedCompaniesLength}: RecommendedCompaniesProps) {
  return <>
    <Box
      sx={{display: 'flex', flexWrap: 'wrap', gap: '10px', backgroundColor: '#F9F5FD', padding: recommendedCompanies.length > 0 ? '16px' : '0', mt: 3}}>
      {
        recommendedCompanies.map((company) => (
          <Box
            sx={{border: "1px solid #CFCFD4", padding: "8px", borderRadius: "4px", cursor: "pointer"}}
            onClick={() => handleSelectedCompany(company)}
          >
            <Typography sx={{mr: 0.5}} component={"span"} variant={"body1"} fontFamily={"Sansation"} fontWeight={"bold"} color={"#101723"}>
              {company.symbol}
            </Typography>
            <Typography component={"span"} variant={"body1"} fontFamily={"Sansation"} color={"#101723"}>
              {company.name}
            </Typography>
            <img style={{display: "inline", marginBottom: "-2px", marginLeft: "8px"}} width="15px" src={plusIcon} alt={"Plus icon"}/>
          </Box>
        ))
      }

    </Box>

    <Box sx={{backgroundColor: '#F9F5FD', px: '16px'}}>
      <Typography variant={'body1'} fontFamily={'Sansation'} color={'#6869AC'}>
        {selectedCompaniesLength} companies saved.
      </Typography>
    </Box>
  </>
}
