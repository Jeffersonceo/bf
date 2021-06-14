import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const AnnouncementHeading = styled(Heading)`
  font-size: 2.5em;
  text-align: left;
  color: #DAB481 !importat;

  @media (max-width: 1300px) {
    font-size: 24px !important;
  }
`

const Title = styled.h1`
  font-size: 2.5em;
  text-align: left;
  color: #DAB481;
  margin-bottom: 20px;
  @media (max-width: 1300px) {
    font-size: 24px !important;
  }
`

const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
        <Title >
          {TranslateString(10003, 'Announcements')}
        </Title>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'boobamtoken',
          }}
          options={{
            height: '300',
            chrome: 'noheader, nofooter',
            width: '400',
          }}
        />
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
