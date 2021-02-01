/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { ContainerRuntimeFactoryWithDefaultDataStore } from "@fluid-experimental/experimental-fluidframework";
import { FluidSudoku } from "./fluidSudoku";

/**
 * This does setup for the Container. The ContainerRuntimeFactoryWithDefaultDataStore also enables dynamic loading in the
 * EmbeddedComponentLoader.
 *
 * There are two important things here:
 * 1. Default Component name
 * 2. Map of string to factory for all components
 */
export const SudokuContainer = new ContainerRuntimeFactoryWithDefaultDataStore(
    FluidSudoku.getFactory(),
    new Map([[FluidSudoku.ObjectIdentifier, Promise.resolve(FluidSudoku.getFactory())]])
);
