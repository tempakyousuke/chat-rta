import React from "react";
import Link from "next/link";

type ButtonProps = {
  to?: string;
  href?: string;
  color?: string;
  brightness?: number;
  disabled?: boolean;
  block?: boolean;
  inverted?: boolean;
  rounded?: string;
  handleClick?: (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

class HiButton extends React.Component<ButtonProps, {}> {
  constructor(props: ButtonProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  static defaultProps = {
    color: "purple",
    block: false,
    inverted: false,
    rounded: "rounded",
    brightness: 700,
  };

  get colorClass(): string {
    if (this.props.inverted) {
      return ` border-solid border-2 bg-white text-${this.props.color}-${this.props.brightness} hover:bg-${this.props.color}-100`;
    }
    return ` text-white bg-${this.props.color}-${
      this.props.brightness
    } hover:bg-${this.props.color}-${this.props.brightness - 200}`;
  }

  get buttonClass(): string {
    let buttonClass = "font-bold py-2 px-4 h-full w-full";
    if (this.props.disabled) {
      buttonClass += " bg-opacity-70";
    }
    buttonClass += ` ${this.props.rounded}`;
    buttonClass += this.colorClass;
    if (this.props.block) {
      buttonClass += "w-full";
    }
    return buttonClass;
  }

  get fullClass(): string {
    if (this.props.block) {
      return "w-full";
    }
    return "";
  }

  get button(): JSX.Element {
    return (
      <button className={this.buttonClass} onClick={this.handleClick}>
        {this.props.children}
      </button>
    );
  }

  handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    if (this.props.disabled) {
      return;
    }
    if (this.props.handleClick) {
      this.props.handleClick(event);
    }
  }

  render(): JSX.Element {
    if (this.props.to && !this.props.disabled) {
      return (
        <div className={this.fullClass}>
          <Link href={this.props.to}>{this.button}</Link>
        </div>
      );
    } else if (this.props.href && this.props.disabled) {
      return (
        <a className={this.fullClass} href={this.props.to}>
          {this.button}
        </a>
      );
    } else {
      return <div className={this.fullClass}>{this.button}</div>;
    }
  }
}

export default HiButton;
