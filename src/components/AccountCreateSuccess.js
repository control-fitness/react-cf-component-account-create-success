import React from 'react';
import {
  Grid,
  Card,
  Container,
  Image,
} from 'semantic-ui-react';
import Cdn from 'react-cf-helper-cdn';
import I18n from 'react-cf-helper-i18n';
import {
  Body,
  AnimationContainer,
  Envelope,
  Open,
  Paper,
  Noti,
  Ul,
  Li,
  PrimaryText,
  SecondaryText,
  FooterText,
} from './style';

const AccountCreateSuccess = function AccountCreateSuccess() {
  return (
    <Body>
      <Grid stackable centered columns={1}>
        <Grid.Column
          computer="ten"
          widescreen="ten"
          tablet="ten"
          mobile="ten"
          largeScreen="seven"
        >
          <Image
            src={Cdn.image('logo-text-296-40.svg')}
            width={236}
            height={32}
            centered
          />
          <Card fluid>
            <Container>
              <AnimationContainer>
                <Envelope>
                  <Paper>
                    <Ul>
                      <Li />
                      <Li />
                      <Li />
                      <Li />
                    </Ul>
                    <Noti>
                      1
                    </Noti>
                  </Paper>
                </Envelope>
                <Open />
              </AnimationContainer>
            </Container>
            <Card.Content>
              <PrimaryText>
                {I18n.t('account.create.success.title')}
              </PrimaryText>
              <SecondaryText>
                {I18n.t('account.create.success.messageOne')}
              </SecondaryText>
              <SecondaryText>
                {I18n.t('account.create.success.messageTwo')}
              </SecondaryText>
            </Card.Content>
          </Card>
          <FooterText>
            {I18n.t('copyright')}
          </FooterText>
          <FooterText>
            {I18n.t('account.create.success.help')}
          </FooterText>
        </Grid.Column>
      </Grid>
    </Body>
  );
};

export default AccountCreateSuccess;
