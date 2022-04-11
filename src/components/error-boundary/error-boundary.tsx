import { Component, ReactNode } from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';

type State = { hasError: boolean };
type Props = { children: ReactNode };

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
