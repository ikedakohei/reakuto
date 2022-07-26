import { FC, Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import capitalize from "lodash/capitalize";

import Spinner from "../../components/molecules/Spinner";
import HomeButton from "../../components/molecules/HomeButton";
import MemberList from "../../containers/organisms/MemberList";
import ErrorBoundary from "../../ErrorBoundary";

const Members: FC<{ orgCode: string }> = ({ orgCode = "UnknownCompany" }) => {
  const title = `${capitalize(orgCode)} の開発メンバー`;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <header className="app-header">
          <h1>{title}</h1>
        </header>
        <ErrorBoundary
          statusMessages={{
            404: `‘${orgCode}’ というコードの組織は見つかりません`,
          }}
        >
          <Suspense fallback={<Spinner />}>
            <MemberList orgCode={orgCode} />
          </Suspense>
        </ErrorBoundary>
        <HomeButton />
      </HelmetProvider>
    </>
  );
};

export default Members;
