import {Box, Typography} from "@mui/material";
import DropdownDataFilter from "./DropdownDataFilter.tsx";
import searchDataImage from '../../assets/images/search/search-data-image.svg';
import {useEffect, useState} from "react";
import RecommendedCompanies from "./RecommendedCompanies.tsx";

export interface Company {
  symbol: string;
  name: string;
}

export default function SearchData() {

  const [selectedCompanies, setSelectedCompanies] = useState<Company[]>([]);
  const [recommendedCompanies, setRecommendedCompanies] = useState<Company[]>([]);
  const [companies, setCompanies] = useState<Company[]>();

  const handleSelectedCompany = (newCompany: Company) => {
    setSelectedCompanies((prev) => [...prev, newCompany]);
    setRecommendedCompanies((prev) => prev.filter(company => company.symbol !== newCompany.symbol));
  }

  useEffect(() => {
    setCompanies([
      {
        "symbol": "AA",
        "name": "Alcoa Corporation",
      },
      {
        "symbol": "AAU",
        "name": "Almaden Minerals Ltd.",
      },
      {
        "symbol": "AAT",
        "name": "American Assets Trust, Inc.",
      },
      {
        "symbol": "AAP",
        "name": "Advance Auto Parts, Inc.",
      },
      {
        "symbol": "AAN",
        "name": "The Aaron's Company, Inc.",
      }
    ])
    setRecommendedCompanies([
      {
        "symbol": "AAPL",
        "name": "Apple Inc.",
      },
      {
        "symbol": "GOOGL",
        "name": "Alphabet Inc.",
      },
      {
        "symbol": "AMZN",
        "name": "Amazon.com Inc.",
      },
      {
        "symbol": "TSLA",
        "name": "Tesla Inc.",
      },
      {
        "symbol": "MSFT",
        "name": "Microsoft Corporation",
      }
    ])
  }, []);

  return (
    <Box sx={{
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '32px'
    }}>
      <Box sx={{width: '500px'}}>
        <Typography variant={'h4'} fontFamily={'Sansation'} color={'#6869AC'}>
          5,000+ companies with data and insight for you
        </Typography>
        <Typography variant={'body1'} fontFamily={'Sansation'} color={'#101723'} sx={{textShadow: "2px 2px 3px gray", my: 1}}>
          Find the company you are interested in. <br/>
          This will help us customize your experience.
        </Typography>

        <DropdownDataFilter
          selectedCompanies={selectedCompanies}
          onSelectedCompany={handleSelectedCompany}
          companies={companies || []}
        />
        <RecommendedCompanies
          selectedCompaniesLength={selectedCompanies.length}
          recommendedCompanies={recommendedCompanies}
          handleSelectedCompany={handleSelectedCompany}
        />

      </Box>
      <Box>
        <img src={searchDataImage} alt={'Search data'} style={{height: '400px', width: '400px'}}/>
      </Box>
    </Box>
  )
}
