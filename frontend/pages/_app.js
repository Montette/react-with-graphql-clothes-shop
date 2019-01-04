import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

class MyApp extends App {
    static async getInitialProps({ Component, ctx}) { //metoda jest najpier odpalana na serwerze, sluży do zainicjalizowania pewnych rzeczy, sciagniecia danych ito - przed wyrenedrowaniem app, a następnie przekazania przez propsy do komponentu. 
        let pageProps = {};
        if(Component.getInitialProps) {
            pageProps = await Component.getInitialProps();
        }
        pageProps.query = ctx.query;
        return { pageProps }
    }
    render() {
        const { Component, apollo, pageProps } = this.props;

        return(
            <Container>
                <ApolloProvider client={apollo}>
                    <Page>
                        <Component {...pageProps}/>
                    </Page> 
                </ApolloProvider>
            </Container>
        )
    }
}
export default withData(MyApp)