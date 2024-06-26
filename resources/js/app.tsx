require("./bootstrap");

import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

createInertiaApp({
	resolve: (name) => require(`./Pages/${name}`),
	setup({ el, App, props }) {
		createRoot(el).render(<App {...props} />);
	},
});
