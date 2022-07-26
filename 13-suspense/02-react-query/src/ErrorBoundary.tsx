import { ErrorInfo, PureComponent, ReactNode } from "react";
import { HTTPError } from "ky";

type StatusMessages = { [status: number]: string };
type Props = { statusMessages?: StatusMessages; children: ReactNode };
type State = { hasError: boolean; error: Error | null };
const DEFAULT_MESSAGES: StatusMessages = { 0: "サーバエラーです" };

class ErrorBoundary extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError = (error: Error): State => ({
    hasError: true,
    error,
  });

  componentDidCatch = (error: Error, info: ErrorInfo): void => {
    console.error(error, info); // eslint-disable-line no-console
  };

  render = (): ReactNode => {
    const { children, statusMessages = {} } = this.props;
    const { hasError, error } = this.state;
    const messages = { ...DEFAULT_MESSAGES, ...statusMessages };

    if (hasError) {
      const statusCode = (error as HTTPError)?.response?.status;

      if (statusCode && Object.keys(messages).includes(String(statusCode))) {
        return <div>{messages[statusCode]}</div>;
      }

      return <div>{messages[0]}</div>;
    }

    return children;
  };
}

export default ErrorBoundary;
