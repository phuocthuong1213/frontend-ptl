import Document, { Html, Main, NextScript, Head } from 'next/document'
import { CardTitle } from 'reactstrap'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <meta charSet="utf-8" />
                <title>Play To Learn</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css" />
                <link href="..//pl2/img/favicon.png" rel="icon" />
                <link href="..//pl2/img/apple-touch-icon.png" rel="apple-touch-icon" />
                <link href="../pl2/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="../pl2/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
                <link href="../pl2/lib/animate/animate.min.css" rel="stylesheet" />
                <link href="../pl2/css/homepage.css" rel="stylesheet" />
                <link href="../pl2/css/style.css" rel="stylesheet" />
                <link href="../pl2/css/all.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link href="../global_assets/css/icons/icomoon/styles.min.css" rel="stylesheet" type="text/css" />
                <link href="../assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
                <link href="../assets/css/bootstrap_limitless.min.css" rel="stylesheet" type="text/css" />
                <link href="../assets/css/layout.min.css" rel="stylesheet" type="text/css" />
                <link href="../assets/css/components.min.css" rel="stylesheet" type="text/css" />
                <link href="../assets/css/colors.min.css" rel="stylesheet" type="text/css" />
                <script src="../global_assets/js/main/jquery.min.js"></script>
                <script src="../global_assets/js/main/bootstrap.bundle.min.js"></script>
                <script src="../global_assets/js/plugins/loaders/blockui.min.js"></script>
                {/* <script src="../global_assets/js/plugins/ui/ripple.min.js"></script> */}
                <script src="../global_assets/js/plugins/forms/styling/uniform.min.js"></script>
                <script src="../assets/js/app.js"></script>
                <script src="../global_assets/js/demo_pages/login.js"></script>

                <body >
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument