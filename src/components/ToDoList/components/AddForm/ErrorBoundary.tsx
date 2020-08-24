import React from "react";

interface ErrorState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<{}, ErrorState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("ошибка", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h3>Слишком много активных задач</h3>;
    }
    return this.props.children;
  }
}
