import {useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";

import DropdownDataFilter from "./DropdownDataFilter.tsx";
import RecommendedCompanies from "./RecommendedCompanies.tsx";

import searchDataImage from '../../assets/images/search/search-data-image.svg';

const MAX_SEARCH_DELAY = 2 * 1000;
const MAX_SEARCH_RESULTS = 5;

export interface Company {
  symbol: string;
  name: string;
}

export default function SearchData() {

  const [selectedCompanies, setSelectedCompanies] = useState<Company[]>([]);
  const [recommendedCompanies, setRecommendedCompanies] = useState<Company[]>([]);
  const [companies, setCompanies] = useState<Company[]>();
  const [typingTimeout, setTypingTimeout] = useState<number>(0);

  const handleSelectedCompany = (newCompany: Company) => {
    setSelectedCompanies((prev) => [...prev, newCompany]);
    setRecommendedCompanies((prev) => prev.filter(company => company.symbol !== newCompany.symbol));
  }

  const handleAPIRequest = async (query: string) => {
    console.log('API request with query:', query);
    // Storing the API key in the frontend is not secure, but it's fine for this example
    const apiKey = import.meta.env.VITE_FINANCIAL_MODELING_PREP_API_KEY;
    try {
      const response = await fetch(`https://financialmodelingprep.com/api/v3/search?query=${query}&apikey=${apiKey}&limit=${MAX_SEARCH_RESULTS}`);
      const data = await response.json();

      if (data && data.length > 0) {
        setCompanies(data);
      }
    } catch (error) {
      console.error('Error fetching companies from API:', error);
    }
  }

  // Wait for the user to stop typing before making the API request
  const handleTextFieldChange = (newText: string) => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(setTimeout(() => {
      handleAPIRequest(newText);
    }, MAX_SEARCH_DELAY) as number);
  }

  useEffect(() => {
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
        <Typography variant={'body1'} fontFamily={'Sansation'} color={'#101723'} sx={{textShadow: "2px 2px 3px gray", mt: 1, mb: 3}}>
          Find the company you are interested in. <br/>
          This will help us customize your experience.
        </Typography>

        <DropdownDataFilter
          onTextFieldChange={handleTextFieldChange}
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
