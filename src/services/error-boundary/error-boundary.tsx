import React, { Component } from 'react';

import ErrorIndicator from '../../components/error-indicator';

export default class ErrorBoundary extends Component<{children: React.ReactElement}, {hasError: boolean}> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    return this.props.children;
  }
};