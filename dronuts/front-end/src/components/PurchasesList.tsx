import { Card, Divider, Grid, Text } from '@geist-ui/react';
import NavBarScroller from './NavbarScroller';

function PurchasesList() {
  return (
    <div className = "DonutApp" >
    <NavBarScroller />
    <Grid.Container gap={2}>
      <Grid xs={24}>
        <Text h2>Purchases</Text>
        <Divider h={6} />
      </Grid>
      <Grid xs={24} justify="center">
        <Card shadow width="90%">
          <Grid.Container gap={2}>
            <Grid xs={6}>
              <Text>Dennis L.</Text>
            </Grid>
            <Grid xs={6}>
              <Text>5000 Forbes Ave</Text>
            </Grid>
            <Grid xs={6}>
              <Text>$30.00</Text>
            </Grid>
            <Grid xs={6}>
              <Text>January 1, 2022</Text>
            </Grid>
          </Grid.Container>
        </Card>
      </Grid>
      <Grid xs={24}>
        <Card shadow width="90%">
          <Grid.Container gap={2}>
            <Grid xs={6}>
              <Text>Aashai A.</Text>
            </Grid>
            <Grid xs={6}>
              <Text>5000 Forbes Ave</Text>
            </Grid>
            <Grid xs={6}>
              <Text>$20.00</Text>
            </Grid>
            <Grid xs={6}>
              <Text>December 26, 2021</Text>
            </Grid>
          </Grid.Container>
        </Card>
      </Grid>
      <Grid xs={24}>
        <Card shadow width="90%">
          <Grid.Container gap={2}>
            <Grid xs={6}>
              <Text>Max D.</Text>
            </Grid>
            <Grid xs={6}>
              <Text>5000 Forbes Ave</Text>
            </Grid>
            <Grid xs={6}>
              <Text>$10.50</Text>
            </Grid>
            <Grid xs={6}>
              <Text>December 6, 2021</Text>
            </Grid>
          </Grid.Container>
        </Card>
      </Grid>
      <Grid xs={24}>
        <Card shadow width="90%">
          <Grid.Container gap={2}>
            <Grid xs={6}>
              <Text>John N.</Text>
            </Grid>
            <Grid xs={6}>
              <Text>5000 Forbes Ave</Text>
            </Grid>
            <Grid xs={6}>
              <Text>$15.00</Text>
            </Grid>
            <Grid xs={6}>
              <Text>October 30, 2021</Text>
            </Grid>
          </Grid.Container>
        </Card>
      </Grid>
    </Grid.Container>
    </div>

  );
}

export default PurchasesList