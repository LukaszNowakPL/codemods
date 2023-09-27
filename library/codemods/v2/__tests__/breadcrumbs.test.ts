"use strict";
import transform from "../breadcrumbs";

jest.autoMockOff();
const defineInlineTest = require("jscodeshift/dist/testUtils").defineInlineTest;

defineInlineTest(
  transform,
  {},
  '<FlareBreadcrumbs.Label label="any label" />',
  '<FlareBreadcrumbs.Link href="#" label="any label" />',
  "Exchanges Label with Link component and adds href prop",
);

defineInlineTest(
  transform,
  {},
  '<FlareBreadcrumbs.Link href="#" label="link component" />',
  '<FlareBreadcrumbs.Link href="#" label="link component" />',
  "Makes no change to Link component",
);
