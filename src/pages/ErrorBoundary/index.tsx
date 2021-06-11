import React, { Component, ErrorInfo, ReactNode } from 'react';

import InfoCard from '../../components/InfoCard';
import { Container } from './styles';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMessage: null };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render(): ReactNode {
    const { children } = this.props;
    const { hasError, errorMessage } = this.state;
    if (hasError)
      return (
        <Container>
          <InfoCard
            title="Error Screen"
            description={errorMessage || 'Ops, something went wrong'}
          />
        </Container>
      );
    return children;
  }
}
